<template>
    <p>
        <input type="radio"
               :class="[withGap ? 'with-gap' : '']"
               :name="group"
               :id="id"
               :checked="checked"
               :disabled="disabled"/>
        <label :for="id">{{label}}<slot></slot></label>
    </p>
</template>

<script>
    var uuid = require('uuid');

    module.exports = {

        props: {
            label: {
                type: String,
                default: ''
            },
            group: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            withGap: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                id: uuid.v1()
            }
        }
    };
</script>