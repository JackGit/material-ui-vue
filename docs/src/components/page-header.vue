<template>
    <header>
        <navbar :logo="currentModule.name" logo-href="#!" side-nav-id="sideNav" logo-position="center"></navbar>
        <side-nav id="sideNav" fixed>
            <nav-item v-for="module in modules | orderBy 'name'" :active="module.name === currentModule.name" @click="handleClick(module.name)">
                <a href="#!" class="waves-effect waves-teal">{{module.name | simplify}}</a>
            </nav-item>
        </side-nav>
    </header>
</template>

<script>
    var actions = require('../vuex/actions.js');

    module.exports = {
        components: {
            'navbar': require('material-ui-vue/components/navbar/navbar.vue'),
            'nav-collapsible-item': require('material-ui-vue/components/navbar/nav-collapsible-item.vue'),
            'nav-dropdown-item': require('material-ui-vue/components/navbar/nav-dropdown-item.vue'),
            'nav-item': require('material-ui-vue/components/navbar/nav-item.vue'),
            'side-nav': require('material-ui-vue/components/side-nav/side-nav.vue'),
            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),
            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue')
        },

        props: {
            componentDetails: {
                type: Object
            }
        },

        methods: {
            handleClick: function(name) {
                this.selectModule(name);
            }
        },

        filters: {
            simplify: function(value) {
                return value.split('/')[1];
            }
        },

        vuex: {
            getters: {
                modules: function(state) {
                    return state.modules;
                },
                currentModule: function(state) {
                    return state.currentModule;
                }
            },
            actions: {
                selectModule: actions.selectModule
            }
        }
    };
</script>