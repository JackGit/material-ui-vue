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

    /**
     * text area
     * @module forms/text-area
     * @author Jack Yang
     * @description {@link http://materializecss.com/forms.html forms} text area component
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
             * @description label of text area controller
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop value
             * @type {String}
             * @default ''
             * @description text value of text area controller
             */
            value: {
                type: String,
                default: ''
            },
            /**
             * @prop icon
             * @type {String}
             * @default ''
             * @description icon of text area controller
             */
            icon: {
                type: String,
                default: ''
            },
            /**
             * @prop length
             * @type {Number}
             * @default null
             * @description length restriction of text area controller
             */
            length: {
                type: Number
            },
            /**
             * @prop validate
             * @type {Boolean}
             * @default false
             * @description enable text area validate or not
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