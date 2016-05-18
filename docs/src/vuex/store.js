var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);

module.exports = window.store = new Vuex.Store({
    state: {
        modules: [],
        currentModule: {},
        navTree: []
    },

    mutations: {
        SET_MODULES: function(state, modules) {
            state.modules = modules;
        },

        SET_CURRENT_MODULE: function(state, name) {
            state.currentModule = state.modules.filter(function(module) {
                return module.name === name;
            })[0] || {};
        },

        SET_CURRENT_MODULE_AS_LOADED: function(state, module) {
            state.currentModule = module;
        },

        SET_NAV_TREE: function(state, tree) {
            state.navTree = tree;
        }
    }
});