var AV = require('avoscloud-sdk');
AV.initialize('IsqV9oNn0Qf14oTG8VeQjnEo-gzGzoHsz', 'OLLDSIaSPh9CkzhKzF8RY6nE');

var query = new AV.Query('ModuleMetaData');
var VERSION = "0.1.3";

function queryModules(version, callback) {
    query.equalTo('version', version);
    query.find().then(function(results) {
        callback && callback(results[0].get('modulesData'));
    }, function(error) {
        console.error('load modules data failed: ' + error.code + ' ' + error.message);
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
            modules = JSON.parse(modules);

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
        store.dispatch('SET_CURRENT_MODULE', name);
    },

    checkModule: function(store, name) {
        return store.state.modules.filter(function(module) {
            return module.name === name;
        }).length > 0;
    }
};