<template>
    <header>
        <navbar v-if="currentModule.name" :logo="currentModule.name" logo-href="#!" side-nav-id="sideNav" logo-position="center"></navbar>
        <side-nav id="sideNav" fixed>
            <div v-for="item in navTree">
                <nav-collapsible-item v-if="item.length > 0">
                    <collapsible-header :label="item[0].category" icon="arrow_drop_down" icon-position="right"></collapsible-header>
                    <collapsible-body>
                        <ul>
                            <nav-item v-for="it in item" :active="it.name === currentModule.name" @click="handleClick(it.name)">
                                <a v-link="{name: 'components', params: {component: it.name}}">{{it.name | simplify}}</a>
                            </nav-item>
                        </ul>
                    </collapsible-body>
                </nav-collapsible-item>

                <nav-item v-else :active="item.name === currentModule.name" @click="handleClick(item.name)">
                    <a class="waves-effect waves-red lighten-4" v-link="{name: 'components', params: {component: item.name}}">{{item.name | simplify}}</a>
                </nav-item>
            </div>
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
                },
                navTree: function(state) {
                    return state.navTree;
                }
            },
            actions: {
                selectModule: actions.selectModule
            }
        }
    };
</script>