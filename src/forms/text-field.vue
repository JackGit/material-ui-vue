<style>

</style>

<template>
    <div :class="classes.concat(['input-field', 'col'])">
        <icon v-if="icon" :classes="['prefix']" :key="icon"></icon>
        <input id="{{id}}"
               type="{{type}}"
               placeholder="{{placeholder}}"
               :class="validate ? 'validate' : ''"
               v-model="value">
        <label for="{{id}}" data-error="{{errorMessage}}" data-success="{{successMessage}}">{{label}}</label>
    </div>
</template>

<script>
    var uuid = require('uuid');

    module.exports = {
        components: {
            'icon': require('../icons/icon.vue')
        },

        props: {
            label: {
                type: String
            },
            value: {
                type: String
            },
            placeholder: {
                type: String
            },
            type: {
                type: String,
                default: 'text'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            classes: {
                type: Array,
                default: []
            },
            icon: {
                type: String
            },
            validate: {
                type: Boolean
            },
            errorMessage: {
                type: String
            },
            successMessage: {
                type: String
            }
        },

        data: function() {
            return {
                id: uuid.v1()
            };
        }
    };
</script>