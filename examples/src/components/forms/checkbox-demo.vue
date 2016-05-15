<template>
    <div class="row">
        <form>
            <checkbox :items="items" :selected="selected"></checkbox>
        </form>
    </div>
</template>

<script>
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
                    {label: 'Blue', value: 'blue'},
                ],
                selected: ['green', 'red', 'yellow']
            }
        }
    }
</script>