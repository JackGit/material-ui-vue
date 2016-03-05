<style>

</style>

<template>
    <div class="input-field">
        <icon v-if="icon"
              class="prefix"
              :value="icon"></icon>

        <input v-el:input
               v-model="value"
               :id="id"
               :type="type"
               :placeholder="placeholder"
               :disabled="disabled"
               :class="validate ? 'validate' : ''">

        <label :for="id"
               :class="(value || placeholder) ? 'active' : ''"
               :data-error="errorMessage"
               :data-success="successMessage">{{label}}</label>
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
                type: String,
                default: ''
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
        },

        ready: function() {
            for(var p in this.$els.input) {
                if(p.startsWith('on')) {
                    $(this.$els.input).on(p.substring(2), function(e) {
                        this.$dispatch('text-field-' + e.type, e);
                    }.bind(this));
                }
            }
        }
    };
</script>