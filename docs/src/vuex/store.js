var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);

module.exports = window.store = new Vuex.Store({
    state: {
        modules: [],
        currentModule: {}
    },

    mutations: {
        SET_MODULES: function(state, modules) {
            state.modules = modules;
        },

        SET_CURRENT_MODULE: function(state, name) {
            state.currentModule = state.modules.filter(function(module) {
                return module.name === name;
            })[0];
        }
    }
});