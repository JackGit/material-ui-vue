<style>
    .date-picker-active-label {
        font-size: 0.8rem !important;
        transform: translateY(-140%);
    }
</style>

<template>
    <div class="input-field">
        <icon v-if="icon"
              class="prefix"
              :value="icon"></icon>

        <input v-el:input type="date" class="datepicker" :id="id" :disabled="disabled">
        <label :for="id" class="date-picker-active-label">{{label}}<slot></slot></label>
    </div>
</template>

<script>
    var uuid = require('uuid');

    /**
     * date picker
     * @module forms/date-picker
     * @author Jack Yang
     * @description {@link http://materializecss.com/forms.html forms} date picker component
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
             * @description label of the date picker input controller
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop icon
             * @type {String}
             * @default ''
             * @description icon of the date picker input controller
             */
            icon: {
                type: String,
                default: ''
            },
            /**
             * @prop date
             * @type {Date}
             * @default new Date()
             * @description date value of the date picker
             */
            date: {
                default: function() {return new Date();}
            },
            /**
             * @prop pickerOptions
             * @type {Object}
             * @default ''
             * @description options for pickdate.js
             */
            pickerOptions: {
                type: Object,
                default: function() {return {};}
            },
            /**
             * @prop opened
             * @type {Boolean}
             * @default false
             * @description indicate this picker popup is opened or not
             */
            opened: {
                type: Boolean,
                default: false
            },
            /**
             * @prop disabled
             * @type {Boolean}
             * @default false
             * @description indicate this picker is disabled or not
             */
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                picker: null,
                id: uuid.v1()
            }
        },

        watch: {
            opened: function(value) {
                if(value)
                    this.open();
                else
                    this.close();
            },
            date: function(value) {
                this.picker.set('select', value);
            }
        },

        ready: function() {
            var $input = $(this.$els.input).pickadate(this.pickerOptions);
            var that = this;

            this.picker = $input.pickadate('picker');

            this.picker.on({
                open: function() {
                    that.opened = true;
                    that.$dispatch('date-picker-open');
                },
                close: function() {
                    that.opened = false;
                    that.$dispatch('date-picker-close');
                },
                set: function(thingSet) {
                    if(thingSet.select) {
                        that.date = thingSet.select;
                        that.$dispatch('date-picker-change', thingSet.select);
                    }
                }
            });

            this.picker.set('select', this.date);
        },

        methods: {
            open: function() {
                this.picker.open();
            },
            close: function() {
                this.picker.close();
            }
        },

        destroyed: function() {
            if(!this.picker)
                return;

            ['open','close','render','stop','set'].forEach(function(event) {
                this.picker.off(event);
            }.bind(this));

            this.picker.stop();
        }
    };
</script>