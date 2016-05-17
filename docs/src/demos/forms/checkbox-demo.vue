<template>
    <form>
        <checkbox :items="items" :selected="selected"></checkbox>
    </form>
</template>

<script>
    /**
     * @example basic checkbox
     * @for checkbox
     * @description
     */
    module.exports = {
        components: {
            'checkbox': require('material-ui-vue/components/forms/checkbox.vue')
        },

        data: function() {
            return {
                items: [
                    {label: 'Green', value: 'green'},
                    {label: 'Red', value: 'red'},
                    {label: 'Yellow', value: 'yellow', disabled: true},
                    {label: 'Blue', value: 'blue'}
                ],
                selected: ['green', 'red', 'yellow']
            }
        }
    };
</script>