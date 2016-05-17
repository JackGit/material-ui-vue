<template>
    <dropdown :items="items" label="Click to Drop Me!" :hover="false"></dropdown>
</template>

<script>
    /**
     * @example dropdown with click
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