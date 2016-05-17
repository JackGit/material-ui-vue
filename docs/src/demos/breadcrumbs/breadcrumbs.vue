<template>
    <breadcrumbs :crumbs="crumbs"></breadcrumbs>
</template>

<script>
    /**
     * @example basic usage
     * @for breadcrumbs
     * @description you can init breadcrumbs by assigning <code>crumbs</code> prop
     */
    module.exports = {

        components: {
            'breadcrumbs': require('material-ui-vue/components/breadcrumbs/breadcrumbs.vue')
        },

        data: function() {
            return {
                crumbs: [
                    {href: '#!', label: 'Top'},
                    {href: '#!', label: 'Middle'},
                    {href: '#!', label: 'Bottom'}
                ]
            };
        }
    };
</script>