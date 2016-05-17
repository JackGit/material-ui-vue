<template>
    <collection with-header>
        <collection-header><h4>Frameworks</h4></collection-header>
        <collection-item>Vue</collection-item>
        <collection-item>React</collection-item>
        <collection-item>Angular</collection-item>
        <collection-item>Meteor</collection-item>
    </collection>
</template>

<script>
    /**
     * @example collection with header
     * @for collection
     * @description
     */
    module.exports = {
        components: {
            'collection': require('material-ui-vue/components/collections/collection.vue'),
            'collection-header': require('material-ui-vue/components/collections/collection-header.vue'),
            'collection-item': require('material-ui-vue/components/collections/collection-item.vue')
        }
    };
</script>