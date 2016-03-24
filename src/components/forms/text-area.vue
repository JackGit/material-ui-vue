<template>
    <div class="input-field">
        <icon v-if="icon"
              :class="iconClasses"
              :value="icon"></icon>

        <textarea v-el:text-area
                  :id="id"
                  :class="textareaClasses"
                  :length="length">{{value}}</textarea>

        <label :for="id"
               :class="value ? 'active' : ''"
               :data-error="errorMessage"
               :data-success="successMessage">{{label}}<slot></slot></label>
    </div>
</template>

<script>
    var uuid = require('uuid');
    var classes = require('../../Util.js').classes;

    module.exports = {
        components: {
            'icon': require('../icons/icon.vue')
        },

        props: {
            label: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            icon: {
                type: String
            },
            length: {
                type: Number
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

        computed: {
            iconClasses: function() {
                return classes({
                    'prefix': true,
                    'active': this.labelActive
                });
            },
            textareaClasses: function() {
                return classes({
                    'materialize-textarea': true,
                    'validate': this.validate,
                    'valid': this.valid === 'valid',
                    'invalid': this.valid === 'invalid'
                });
            }
        },

        data: function() {
            return {
                id: uuid.v1(),
                labelActive: false,
                valid: ''
            };
        },

        ready: function() {
            for(var p in this.$els.textArea) {
                if(p.startsWith('on')) {
                    $(this.$els.textArea).on(p.substring(2), function(e) {
                        this.$dispatch('text-area-' + e.type, e);
                    }.bind(this));
                }
            }
        },

        methods: {
            validateField: function() {
                var object = $(this.$els.textArea);
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
            'text-area-focus': function() {
                this.labelActive = true;
                return true;
            },
            'text-area-blur': function() {
                this.labelActive = false;
                return true;
            },
            'text-area-change': function() {
                this.validateField();
                return true;
            }
        }
    };

</script>