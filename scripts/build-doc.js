var path = require('path');
var fse = require('fs-extra');
var fs = require('fs');
var AV = require('avoscloud-sdk');
var AVConfig = require('../av.config.js');

AV.initialize(AVConfig.id, AVConfig.key);

var isWin = /^win/.test(process.platform);
var SLASH = isWin ? '\\' : '/';

var ModuleMetaDataAVObject = AV.Object.extend('ModuleMetaData');

function saveModuleToCloud(version, module) {
    var avObj = new ModuleMetaDataAVObject();

    avObj.set('version', version);
    avObj.set('moduleData', module);
    avObj.set('moduleName', module.name);

    avObj.save().then(function() {
        console.log('module [' + module.name + ':' + version + '] saved to the cloud');
    }, function(error) {
        console.log('module [' + module.name + ':' + version + '] save failed', error);
    });
}

function saveModules(version, modules) {
    var query = new AV.Query('ModuleMetaData');

    query.equalTo('version', version);

    query.destroyAll().then(function() {
        console.log('all previous module data of ' + version + ' version have been deleted');
        modules.forEach(function(module) {
            saveModuleToCloud(version, module);
        });
    }, function() {
        console.log('trying to delete previous module data of ' + version + ' version failed');
        modules.forEach(function(module) {
            saveModuleToCloud(version, module);
        });
    });
}

function parseComponentFile(filePath, fileString) {
    var blocks = parseCommentBlocks(fileString);
    var lines = [];
    var arr = filePath.split(SLASH);
    var module = {
        name: '',
        category: arr[arr.length - 2], // forms, buttons, etc
        author: '',
        description: '',
        props: [],
        methods: []
    };

    blocks.forEach(function(block) {
        lines = parseCommentLines(block);
        if(lines.length > 0) {
            switch(lines[0].key) {
                case 'module':
                    module.name = lines.filter(function(line) { return line.key == 'module'; })[0].value;
                    module.author = lines.filter(function(line) { return line.key == 'author'; })[0].value;
                    module.description = lines.filter(function(line) { return line.key == 'description'; })[0].value;
                    break;
                case 'prop':
                    var prop = {
                        name: lines.filter(function(line) { return line.key == 'prop'; })[0].value,
                        type: lines.filter(function(line) { return line.key == 'type'; })[0].value,
                        default: lines.filter(function(line) { return line.key == 'default'; })[0].value,
                        description: lines.filter(function(line) { return line.key == 'description'; })[0].value
                    };
                    module.props.push(prop);
                    break;
                case 'method':
                    break;
            }
        }
    });

    return module;
}

/**
 * @description parse example .vue file into example object
 * @param fileString
 */
function parseExampleFile(filePath, fileString) {
    var blocks = parseCommentBlocks(fileString);
    var lines = [];
    var example = {
        name: '',
        description: '',
        code: '',
        componentName: '',
        demoComponentName: filePath.substring(filePath.lastIndexOf(SLASH) + 1).split('.')[0]
    };

    blocks.forEach(function(block) {
        lines = parseCommentLines(block);
        if(lines.length > 0) {
            switch(lines[0].key) {
                case 'example':
                    example.name = lines.filter(function(line) { return line.key == 'example'; })[0].value;
                    example.description = lines.filter(function(line) { return line.key == 'description'; })[0].value;
                    example.code = fileString; // should remove comments
                    example.componentName = lines.filter(function(line) { return line.key == 'for'; })[0].value;
                    break;
            }
        }
    });

    return example;
}


/**
 * @description input string content of a file, return an array of comment blocks
 * @param fileString
 * @returns {Array}
 */
function parseCommentBlocks(fileString) {
    var commentBlockReg = /\/\*{2}[\s\S]*?\*\//gm;
    var match;
    var results = [];

    while(match = commentBlockReg.exec(fileString)) {
        results.push(match[0]);
    }

    return results;
}

/**
 * @description input string of comment block, output array of line objects
 * @param blockString
 * @returns {Array}
 */
function parseCommentLines(blockString) {
    // input:   /**
    //            * badge
    //            * @module badges/badge
    //            * @author Jack Yang
    //            * @description {@link http://materializecss.com/badges.html Badges} can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the background.
    //            */

    // output: [
    //      {key: 'module', value: 'badges/badge'},
    //      {key: 'author', value: 'Jack Yang'},
    //      {key: 'description', value: '<a href="http://materializecss.com/badges.html">Badges</a> can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the background.'}
    // ]

    var commentLineReg = /@(\w+\b)(.*)/gm;
    var match;
    var lines = [];

    while(match = commentLineReg.exec(blockString)) {
        lines.push({key: match[1], value: parseLink(match[2].trim())});
    }

    return lines;
}

/**
 * @description input a string value, convert @link to anchor
 * @param value
 * @returns {String}
 */
function parseLink(value) {
    // input:  "{@link http://materializecss.com/badges.html Badges} can notify you that there are new or unread messages or notifications."
    // output: "<a href="http://materializecss.com/badges.html">Badges</a> can notify you that there are new or unread messages or notifications."

    var anchor = '';
    var s, e;
    var linkContent = '';

    s = value.indexOf('{@link');

    if(s !== -1) {
        e = value.indexOf('}');
        linkContent = value.substring(s + '{@link '.length, e); // "http://materializecss.com/badges.html Badges"
        anchor = '<a href="' + linkContent.split(' ')[0] + '">' + linkContent.split(' ')[1] + '</a>';
        value = value.substring(0, s) + anchor + value.substring(e + 1);

        // if the rest content still have @link, parse them in nest
        if(value.indexOf('{@link') !== -1)
            value = parseLink(value);
    }

    return value;
}

function scan(root, callback) {

    var items = [];
    var results = [];

    console.log('scanning started ' + root);

    fse.walk(root)
        .on('data', function(item) {
            // skip directory
            if(!item.stats.isDirectory() && item.path.endsWith('.vue')) {
                items.push(item.path);
                console.log('scanning file ' + item.path, items.length);
            }
        })
        .on('end', function() {
            console.log('scanning completed');
            console.log('parsing started');

            items.forEach(function(filePath, index) {
                fs.readFile(filePath, 'utf-8', function(err, data) {
                    var result;

                    if(err) {
                        console.error('parsing component file ' + filePath + ' failed');
                        throw err;
                    } else {
                        console.log('parsing component file', filePath);

                        result = parseComponentFile(filePath, data);
                        result.name && results.push(result); // store only when there is module name

                        // when loop end, output json file
                        if(index === items.length - 1) {
                            callback && callback(results);
                            console.log('parsing completed');
                        }
                    }
                });
            });
        });
}

function scanExamples(root, callback) {
    var items = [];
    var examples = [];

    fse.walk(root)
        .on('data', function(item) {
            // skip directory
            if(!item.stats.isDirectory()) {
                items.push(item.path);
                console.log('scanning example file ' + item.path);
            }
        })
        .on('end', function() {
            items.forEach(function(filePath, index) {
                fs.readFile(filePath, 'utf-8', function (err, data) {
                    var example;

                    if(err) {

                    } else {
                        example = parseExampleFile(filePath, data);
                        if(example.name && example.componentName) {
                            examples.push(example);
                        }

                        if(index === items.length - 1) {
                            callback && callback(examples);
                        }
                    }
                });
            });
        });
}

function run(callback) {
    console.log('building docs...');
    var root = path.resolve(__dirname, '../src/components');
    var exampleRoot = path.resolve(__dirname, '../docs/src/demos');

    scan(root, function(results) {
        scanExamples(exampleRoot, function(examples) {
            results.forEach(function(module) {
                module.examples = examples.filter(function(example) {
                    // module.name = 'chips/chip'
                    // example.componentName = 'chip'
                    return example.componentName === module.name.split('/')[1];
                });

                if(module.examples.length === 0) {
                    console.warn('module ' + module.name + ' has no examples');
                }
            });

            callback && callback(results);
        });
    });
}

/*run(function(modules) {
    fse.outputJson(path.resolve(__dirname, './temp.json'), modules, function(err) {
        if(err)
            console.log('output json failed', err);
        else
            console.log('output json successfully');
    });
});*/

run(function(modules) {
    fse.readJson(path.resolve(__dirname, '../package.json'), function(err, packageObj) {
        saveModules(packageObj.version, modules);
    });
});