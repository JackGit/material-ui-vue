<template>
    <link-collection>
        <a href="#!">Inbox<badge new>12</badge></a>
        <a href="#!">Outbox<badge>22</badge></a>
        <a href="#!">Draft<badge>2</badge></a>
    </link-collection>
</template>

<script>
    module.exports = {
        components: {
            'badge': require('../../../src/components/badges/badge.vue'),
            'link-collection': require('../../../src/components/collections/link-collection.vue')
        }
    }
</script>