var path = require('path');
var fse = require('fs-extra');
var fs = require('fs');


function parseComponentFile(fileString) {
    var blocks = parseCommentBlocks(fileString);
    var lines = [];
    var module = {
        name: '',
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

function parseExampleFile() {

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

function scan() {
    var root = path.resolve(__dirname, '../src/components');
    var items = [];
    var results = [];

    console.log('scanning started ' + root);

    fse.walk(root)
        .on('data', function(item) {
            // skip directory
            if(!item.stats.isDirectory()) {
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

                        result = parseComponentFile(data);
                        result.name && results.push(result); // store only when there is module name

                        // when loop end, output json file
                        if(index === items.length - 1) {
                            fse.outputJson(path.resolve(__dirname, './temp.json'), results, function(err) {
                                if(err)
                                    console.log('output json failed', err);
                                else
                                    console.log('output json successfully');
                            });

                            console.log('parsing completed');
                        }
                    }
                });
            });
        });
}

function run() {
    console.log('building docs...');
    // scan files
        // store the .vue file content as code
        // extract comment blocks
        // for each blocks, find the right parser to parse it
    scan();
}

run();