<template>
    <link-collection>
        <a href="#!">Inbox<badge new>12</badge></a>
        <a href="#!">Outbox<badge>22</badge></a>
        <a href="#!">Draft<badge>2</badge></a>
    </link-collection>
</template>

<script>
    /**
     * @example badges in collections with slot
     * @for badge
     * @description you can put badges in collections by adding child element of <code>link-collection</code> element
     */
    module.exports = {
        components: {
            'badge': require('material-ui-vue/components/badges/badge.vue'),
            'link-collection': require('material-ui-vue/components/collections/link-collection.vue')
        }
    }
</script>