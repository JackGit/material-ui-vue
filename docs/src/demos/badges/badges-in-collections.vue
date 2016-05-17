<template>
    <link-collection :links="links"></link-collection>
</template>

<script>
    /**
     * @example badges in collections
     * @for badge
     * @description you can put badges in collections by adding <code>badge</code> into the collection <code>links</code> object
     */
    module.exports = {
        components: {
            'link-collection': require('material-ui-vue/components/collections/link-collection.vue')
        },

        data: function() {
            return {
                links: [
                    {href: '#!', label: 'Inbox', badge: {label: '12', new: true}},
                    {href: '#!', label: 'Outbox', badge: {label: '2', new: false}},
                    {href: '#!', label: 'Draft'}
                ]
            }
        }
    };
</script>