<template>
    <div class="row">
        <form>
            <radio group="r1" :items="items" selected="red"></radio>
        </form>
    </div>
</template>

<script>
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
                    {label: 'Blue', value: 'blue'},
                ]
            }
        }
    }
</script>