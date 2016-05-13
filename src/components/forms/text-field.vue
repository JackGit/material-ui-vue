<template>
    <div class="input-field">
        <icon v-if="icon"
              :class="iconClasses"
              :value="icon"></icon>

        <input v-el:input
               v-model="value"
               :id="id"
               :type="type"
               :placeholder="placeholder"
               :disabled="disabled"
               :class="inputClasses"
               :length="length">

        <label :for="id"
               :class="labelClasses"
               :data-error="errorMessage"
               :data-success="successMessage">{{label}}<slot></slot></label>
    </div>
</template>

<script>
    var uuid = require('uuid');
    var classes = require('../../Util.js').classes;

    /**
     * text field
     * @module forms/text-field
     * @author Jack Yang
     * @description {@link http://materializecss.com/forms.html forms} text field component
     */
    module.exports = {
        components: {
            'icon': require('../icons/icon.vue')
        },

        props: {
            /**
             * @prop label
             * @type {String}
             * @default ''
             * @description label of text field
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop value
             * @type {String}
             * @default ''
             * @description value of text field
             */
            value: {
                type: String,
                default: ''
            },
            /**
             * @prop placeholder
             * @type {String}
             * @default ''
             * @description placeholder of text field
             */
            placeholder: {
                type: String,
                default: ''
            },
            /**
             * @prop length
             * @type {Number}
             * @default null
             * @description length of text field
             */
            length: {

            },
            /**
             * @prop type
             * @type {String}
             * @default 'text'
             * @description input type of text field
             */
            type: {
                type: String,
                default: 'text'
            },
            /**
             * @prop disabled
             * @type {Boolean}
             * @default false
             * @description indicate text field is disabled or not
             */
            disabled: {
                type: Boolean,
                default: false
            },
            /**
             * @prop icon
             * @type {String}
             * @default ''
             * @description icon of text field
             */
            icon: {
                type: String,
                default: ''
            },
            /**
             * @prop validate
             * @type {Boolean}
             * @default false
             * @description enable field validate or not
             */
            validate: {
                type: Boolean,
                default: false
            },
            /**
             * @prop errorMessage
             * @type {String}
             * @default ''
             * @description error message content
             */
            errorMessage: {
                type: String,
                default: ''
            },
            /**
             * @prop successMessage
             * @type {String}
             * @default ''
             * @description success message content
             */
            successMessage: {
                type: String,
                default: ''
            }
        },

        computed: {
            iconClasses: function() {
                return classes({
                    'prefix': true,
                    'active': this.labelActive
                });
            },
            inputClasses: function() {
                return classes({
                    'validate': this.validate,
                    'valid': this.valid === 'valid',
                    'invalid': this.valid === 'invalid'
                });
            },
            labelClasses: function() {
                return classes({
                    'active': this.value || this.placeholder
                });
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