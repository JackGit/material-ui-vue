<style>

</style>

<template>
    <div :class="classes.concat(['input-field', 'col'])">
        <icon v-if="icon" :classes="['prefix']" :key="icon"></icon>
        <input placeholder="{{placeholder}}" id="{{id}}" type="text" :class="validate ? 'validate' : ''" v-model="value">
        <label for="{{id}}">{{label}}</label>
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
            icon: {
                type: String
            },
            disable: {
                type: Boolean,
                default: false
            },
            validate: {
                type: Boolean
            },
            type: {
                type: String,
                default: 'text'
            },
            classes: {
                type: Array,
                default: []
            }
        },

        data: function() {
            return {
                id: uuid.v1()
            };
        }
    };
</script>