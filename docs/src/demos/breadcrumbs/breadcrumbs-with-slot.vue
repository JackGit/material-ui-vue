<template>
    <breadcrumbs>
        <a href="#!">Top</a>
        <a href="#!">Middle</a>
        <a href="#!">Bottom</a>
    </breadcrumbs>
</template>

<script>
    /**
     * @example with slot
     * @for breadcrumbs
     * @description you can init breadcrumbs by adding anchor as child elements
     */
    module.exports = {
        components: {
            'breadcrumbs': require('material-ui-vue/components/breadcrumbs/breadcrumbs.vue')
        }
    };
</script>