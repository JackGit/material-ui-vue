<template>
    <navbar logo="Material UI Vue">
        <nav-item><a href="#">Vue<badge new>102</badge></a></nav-item>
        <nav-item><a href="#">React</a></nav-item>
    </navbar>
</template>

<script>
    /**
     * @example badges in navbar
     * @for badge
     * @description you can put badges in navbar by adding <code>badge</code> element into <code>nav-item</code> element
     */
    module.exports = {
        components: {
            'navbar': require('material-ui-vue/components/navbar/navbar.vue'),
            'nav-item': require('material-ui-vue/components/navbar/nav-item.vue'),
            'badge': require('material-ui-vue/components/badges/badge.vue')
        }
    };
</script>