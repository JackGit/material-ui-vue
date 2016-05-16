<template>
    <breadcrumbs :crumbs="crumbs"></breadcrumbs>
</template>

<script>
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