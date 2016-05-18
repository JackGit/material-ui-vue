<template>
    <div>
        <page></page>
    </div>
</template>

<script>
    var store = require('./vuex/store.js');
    var actions = require('./vuex/actions.js');

    module.exports = {

        components: {
            'page': require('./components/page.vue')
        },

        ready: function() {
            this.loadAllModules();
        },

        store: store,

        vuex: {
            actions: {
                loadAllModules: actions.loadAllModules
            }
        }
    };
</script>