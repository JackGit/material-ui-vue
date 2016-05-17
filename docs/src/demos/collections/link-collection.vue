<template>
    <link-collection :links="links"></link-collection>
</template>

<script>
    /**
     * @example link collection
     * @for link-collection
     * @description
     */
    module.exports = {
        components: {
            'link-collection': require('material-ui-vue/components/collections/link-collection.vue')
        },

        data: function() {
            return {
                links: [
                    {href: '#!', label: 'Vue', active: true},
                    {href: '#!', label: 'Angular', active: false},
                    {href: '#!', label: 'React', active: false}
                ]
            }
        }
    };
</script>