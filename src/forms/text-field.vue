<template>
    <div class="input-field">
        <icon v-if="icon"
              :class="['prefix', labelActive ? 'active' : '']"
              :value="icon"></icon>

        <input v-el:input
               v-model="value"
               :id="id"
               :type="type"
               :placeholder="placeholder"
               :disabled="disabled"
               :class="[validate ? 'validate' : '', valid]"
               :length="length">

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
            length: {
                type: Number
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
                id: uuid.v1(),
                labelActive: false,
                valid: ''           // 'valid', 'invalid'
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
        },

        methods: {
            validateField: function() {
                var object = $(this.$els.input);
                var hasLength = object.attr('length') !== undefined;
                var lenAttr = parseInt(object.attr('length'));
                var len = object.val().length;

                if (object.val().length === 0 && object[0].validity.badInput === false) {
                    if(this.validate) {
                        this.valid = '';
                    }
                } else {
                    if (this.validate) {
                        // Check for character counter attributes
                        if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
                            this.valid = 'valid';
                        } else {
                            this.valid = 'invalid';
                        }
                    }
                }
            }
        },

        events: {
            'text-field-focus': function() {
                this.labelActive = true;
                return true;
            },
            'text-field-blur': function() {
                this.labelActive = false;
                return true;
            },
            'text-field-change': function() {
                this.validateField();
                return true;
            }
        }
    };
</script>