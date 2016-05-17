<template>
    <dropdown :items="items" label="Drop Me!" icon="edit" icon-position="right" :large="true"></dropdown>
</template>

<script>
    /**
     * @example basic dropdown
     * @for dropdown
     * @description
     */
    module.exports = {
        components: {
            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')
        },

        data: function() {
            return {
                items: [
                    {href: '#!', label: 'One'},
                    {href: '#!', label: 'Two'},
                    {divider: true},
                    {href: '#!', label: 'Three'},
                ]
            }
        }
    };
</script>