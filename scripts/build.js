var path = require('path');
var fs = require('fs-extra');

function clean() {
    var directory = path.resolve(__dirname, '../dist');
    console.log('cleaning directory ' + directory);

    return new Promise(function(resolve, reject) {
        fs.remove(directory, function(err) {
            if(err) reject(err);
            else {
                console.log('dist directory is cleaned');
                resolve();
            }
        });
    })
}

function create() {
    var directory = path.resolve(__dirname, '../dist');

    console.log('creating directory ' + directory);
    return new Promise(function(resolve, reject) {
        fs.mkdirs(directory, function(err) {
            if(err) reject(err);
            else {
                console.log('dist directory is created');
                resolve();
            }
        });
    });
}

function copy() {
    var source = path.resolve(__dirname, '../src');
    var dest = path.resolve(__dirname, '../dist');

    console.log('copying files from ' + source + ' to ' + dest);

    return new Promise(function(resolve, reject) {
       fs.copy(source, dest, function(err) {
           if(err) reject(err);
           else {
               console.log('files are copied');
               resolve();
           }
       })
    });
}

function copyLicense() {
    var readmePath = path.resolve(__dirname, '../LICENSE');
    var dest = path.resolve(__dirname, '../dist/LICENSE');

    console.log('copying LICENSE from ' + readmePath + ' to ' + dest);

    return new Promise(function(resolve, reject) {
        fs.copy(readmePath, dest, function(err) {
            if(err) reject(err);
            else {
                console.log('LICENSE is copied');
                resolve();
            }
        })
    });
}

function copyReadme() {
    var readmePath = path.resolve(__dirname, '../README.md');
    var dest = path.resolve(__dirname, '../dist/README.md');

    console.log('copying README.md from ' + readmePath + ' to ' + dest);

    return new Promise(function(resolve, reject) {
        fs.copy(readmePath, dest, function(err) {
            if(err) reject(err);
            else {
                console.log('README.md is copied');
                resolve();
            }
        })
    });
}

function createPackageFile() {
    console.log('creating package.json...');
    var source = path.resolve(__dirname, '../package.json');
    var dest = path.resolve(__dirname, '../dist/package.json');

    return new Promise(function(resolve, reject) {
        fs.readJson(source, function(err, data) {
            if(err) reject(err);
            else {
                console.log('read package.json file successfully');

                delete data.devDependencies;
                delete data.scripts;

                fs.outputJson(dest, data, function(err) {
                    if(err) reject(err);
                    else {
                        console.log('created package.json file');
                        resolve();
                    }
                });
            }
        })
    });
}

function run() {
    console.log('start building');
    clean()
        .then(create)
        .then(copy)
        .then(copyReadme)
        .then(copyLicense)
        .then(createPackageFile)
        .catch(function(error) {
            console.error('building failed', error);
        });
    console.log('building completed');
}

run();