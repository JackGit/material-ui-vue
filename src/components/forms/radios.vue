<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>

    var uuid = require('uuid');

    module.exports = {
        props: {
            group: {
                type: String,
                default: ''
            },
            withGap: {
                type: Boolean,
                default: false
            },
            items: {
                type: Array,    // {label: '', value: '', checked: false, disabled: false}
                default: function() {return [];}
            }
        },

        data: function() {
            return {
                value: ''
            }
        },

        ready: function() {
            $(this.$el).find('input[type="radio"]').attr('name', this.group);
        },

        methods: {

        }
    };
</script>