<template>
    <div>
        <page-header></page-header>
        <page-main v-if="currentModule.name" :component-details="currentModule"></page-main>
        <page-footer></page-footer>
    </div>
</template>

<script>
    var actions = require('../vuex/actions.js');

    module.exports = {
        components: {
            'page-header': require('./page-header.vue'),
            'page-main': require('./page-main.vue'),
            'page-footer': require('./page-footer.vue')
        },

        ready: function() {
            this.loadAllModules();
        },

        vuex: {
            getters: {
                currentModule: function(state) {
                    return state.currentModule;
                }
            },
            actions: {
                loadAllModules: actions.loadAllModules
            }
        }
    };
</script>