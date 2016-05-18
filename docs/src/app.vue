<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    var store = require('./vuex/store.js');
    var actions = require('./vuex/actions.js');

    module.exports = {

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