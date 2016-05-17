<template>
    <form>
        <radio group="r1" :items="items" selected="red"></radio>
    </form>
</template>

<script>
    /**
     * @example basic radio
     * @for radio
     * @description
     */
    module.exports = {
        components: {
            'radio': require('material-ui-vue/components/forms/radio.vue')
        },

        data: function() {
            return {
                items: [
                    {label: 'Green', value: 'green'},
                    {label: 'Red', value: 'red'},
                    {label: 'Yellow', value: 'yellow', disabled: true},
                    {label: 'Blue', value: 'blue'}
                ]
            }
        }
    };
</script>