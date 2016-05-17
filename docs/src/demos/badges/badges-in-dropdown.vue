<template>
    <dropdown label="dropdown" :items="dropdownItems"></dropdown>
</template>

<script>
    /**
     * @example badges in dropdown via props
     * @for badge
     * @description you can put badges in dropdown, by assigning <code>badge</code> attribute of dropdown item.
     */
    module.exports = {
        components: {
            'badge': require('material-ui-vue/components/badges/badge.vue'),
            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')
        },

        data: function() {
            return {
                dropdownItems: [
                    {href: '#!', label: 'Inbox', badge: {label: '12', new: true}},
                    {href: '#!', label: 'Outbox'},
                    {href: '#!', label: 'Draft', badge: {label: '3', new: false}},
                    {href: '#!', label: 'Deleted'}
                ]
            }
        }
    };
</script>