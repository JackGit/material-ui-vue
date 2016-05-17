<template>
    <div>
        <page></page>
    </div>
</template>

<script>
    var store = require('./vuex/store.js');

    module.exports = {
        components: {
            'page': require('./components/page.vue')
        },

        store: store
    };
</script>