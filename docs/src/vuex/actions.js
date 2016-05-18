var AV = require('avoscloud-sdk');
var AVConfig = require('../../../av.config.js');

AV.initialize(AVConfig.id, AVConfig.key);

var VERSION = "0.1.4";

function queryModules(version, callback) {
    var query = new AV.Query('ModuleMetaData');
    query.equalTo('version', version);
    query.find().then(function(results) {
        var modules = results.map(function(r) {
            return r.get('moduleData');
        });

        callback && callback(modules);
    }, function(error) {
        console.error('load modules data failed: ' + error.code + ' ' + error.message);
    });
}

function queryModule(version, name, callback) {
    var query = new AV.Query('ModuleMetaData');

    query.equalTo('version', version);
    query.equalTo('moduleName', name);

    query.find().then(function(results) {
        if(results.length > 0)
            callback && callback(results[0].get('moduleData'));
        else
            console.warn('load module ' + name + ':' + version + ' returns nothing');
    }, function(error) {
        console.error('load module ' + name + ':' + version + ' failed', error);
    });
}

function getModuleTree(modules) {
    var categories = {};
    var tree = [];

    modules.forEach(function(module) {
        if(!categories[module.category])
            categories[module.category] = [];

        categories[module.category].push(module);
    });

    for(var c in categories) {
        if(categories[c].length === 1)
            tree.push(categories[c][0]);
        else
            tree.push(categories[c]);
    }

    return tree;
}

module.exports = {
    loadAllModules: function(store, callback) {
        queryModules(VERSION, function(modules) {
            store.dispatch('SET_MODULES', modules.sort(function(m1, m2) {
                if(m1.name < m2.name) return -1;
                if(m1.name > m2.name) return 1;
                return 0;
            }));

            store.dispatch('SET_NAV_TREE', getModuleTree(modules));

            callback && callback();
        });
    },

    selectModule: function(store, name/* badges/badge */) {
        if(store.state.modules.length > 0) {
            store.dispatch('SET_CURRENT_MODULE', name);
        } else {
            queryModule(VERSION, name, function(module) {
                console.log('query module returned', module);
                store.dispatch('SET_CURRENT_MODULE_AS_LOADED', module);
            });
        }
    },

    checkModule: function(store, name) {
        return store.state.modules.filter(function(module) {
            return module.name === name;
        }).length > 0;
    }
};