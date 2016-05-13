<template>
    <navbar logo="Material UI Vue">
        <nav-item><a href="#">Vue<badge new>102</badge></a></nav-item>
        <nav-item><a href="#">React</a></nav-item>
    </navbar>
</template>

<script>
    module.exports = {
        components: {
            'navbar': require('../../../src/components/navbar/navbar.vue'),
            'nav-item': require('../../../src/components/navbar/nav-item.vue'),
            'badge': require('../../../src/components/badges/badge.vue')
        }
    }
</script>