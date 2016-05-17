<template>
    <div :class="divClasses">
        <select v-el:select v-model="selected" :multiple="multiple" :class="selectClasses" :disabled="disabled">
            <option v-if="options" v-for="option in options"
                    :value="option.value"
                    :class="optionClasses"
                    :data-icon="option.icon"
                    :disabled="option.disabled">{{option.label}}</option>
            <optgroup v-if="groupOptions" v-for="(name, opts) in groupOptions" :label="name">
                <option v-for="option in opts"
                        :value="option.value"
                        :class="optionClasses"
                        :data-icon="option.icon"
                        :disabled="option.disabled">{{option.label}}</option>
            </optgroup>
        </select>
        <label>{{label}}<slot></slot></label>
    </div>
</template>

<script>
    var uuid = require('uuid');
    var classes = require('../../Util.js').classes;

    /**
     * select field
     * @module forms/select-field
     * @author Jack Yang
     * @description {@link http://materializecss.com/forms.html forms} select field component
     */
    module.exports = {
        props: {
            /**
             * @prop label
             * @type {String}
             * @default ''
             * @description label of select field
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop multiple
             * @type {Boolean}
             * @default false
             * @description indicate this is a multiple select field or not
             */
            multiple: {
                type: Boolean,
                default: false
            },
            /**
             * @prop disabled
             * @type {Boolean}
             * @default false
             * @description indicate this select field is disabled or not
             */
            disabled: {
                type: Boolean,
                default: false
            },
            /**
             * @prop options
             * @type {Array}
             * @default function() {return [];}
             * @description options of the select field. Example value: [{value: '0', label: 'zero', disabled: false, icon: 'path/to/image.jpg'}, {value: '1', label: 'one', disabled: false, icon: 'path/to/image.jpg'}]
             */
            options: {
                type: Array,
                default: function() {return [];}
            },
            /**
             * @prop groupOptions
             * @type {Object}
             * @default null
             * @description group options of the select field. Example value: {g1: [{value: '0', label: 'zero', disabled: false}, {value: '1', label: 'one', disabled: false}], g2: [{value: '2', label: 'two', disabled: false}, {value: '3', label: 'three', disabled: false}]}
             */
            groupOptions: {
                type: Object,
                default: null
            },
            /**
             * @prop selected
             * @type {Array | String}
             * @default ''
             * @description value been select. It could be a string value or an array of string values. Values should come from value attribute of item object.
             */
            selected: {
                //type: String, //could be array and string
                default: ''
            },
            /**
             * @prop icons
             * @type {Boolean}
             * @default false
             * @description indicate options with icons
             */
            icons: {
                type: Boolean,
                default: false
            },
            /**
             * @prop iconPosition
             * @type {String}
             * @default 'left'
             * @description position of option icon. Possible values: 'left' and 'right'
             */
            iconPosition: {
                type: String,
                default: 'left'
            },
            /**
             * @prop circleIcon
             * @type {Boolean}
             * @default true
             * @description apply circle icon style or not
             */
            circleIcon: {
                type: Boolean,
                default: true
            },
            /**
             * @prop browserDefault
             * @type {Boolean}
             * @default false
             * @description use browser default style or not
             */
            browserDefault: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                id: uuid.v1(),
                optionClasses: classes({
                    'circle': this.circleIcon,
                    'left': this.iconPosition === 'left',
                    'right': this.iconPosition === 'right'
                }),
                selectClasses: classes({
                    'icons': this.icons,
                    'browser-default': this.browserDefault
                }),
                divClasses: classes({
                    'input-field': !this.browserDefault
                })
            }
        },

        watch: {
            options: {
                handler: function() {
                    $(this.$els.select).material_select();
                },
                deep: true
            },
            groupOptions: {
                handler: function() {
                    $(this.$els.select).material_select();
                },
                deep: true
            },
            selected: function() {
                $(this.$els.select).material_select();
            },
            disabled: function() {
                $(this.$els.select).material_select();
            }
        },

        ready: function() {
            var that = this;

            $(this.$els.select).material_select();
            $(this.$els.select).on('change', function(e) {
                that.selected = $(this).val();
                that.$dispatch('select-field-' + e.type, e);
            });
        },

        destroyed: function() {
            $(this.$els.select).material_select('destroy');
        }
    };
</script>