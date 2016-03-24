<template>
    <div :class="divClasses">
        <select v-el:select v-model="selected" :multiple="multiple" :class="selectClasses">
            <option v-if="options" v-for="option in options"
                    :value="option.value"
                    :class="optionClasses"
                    :data-icon="option.icon"
                    :disabled="option.disabled">{{option.text}}</option>
            <optgroup v-if="groupOptions" v-for="(name, opts) in groupOptions" :label="name">
                <option v-for="option in opts"
                        :value="option.value"
                        :class="optionClasses"
                        :data-icon="option.icon"
                        :disabled="option.disabled">{{option.text}}</option>
            </optgroup>
        </select>
        <label>{{label}}<slot></slot></label>
    </div>
</template>

<script>
    var uuid = require('uuid');
    var classes = require('../../Util.js').classes;

    module.exports = {
        props: {
            label: {
                type: String
            },
            multiple: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            options: {
                type: Array,    // {value: '', text: '', disabled: false, icon: ''}
                default: function() {return [];}
            },
            groupOptions: {
                type: Object,    // {'g1': [{value: '', text: '', disabled: false, icon: ''}]}
                default: null
            },
            selected: {
                //type: String, //could be array and string
                default: ''
            },
            icons: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,   // 'left', 'right'
                default: 'left'
            },
            circleIcon: {
                type: Boolean,
                default: true
            },
            browserDefault: {
                type: Boolean,
                default: false
            }
        },

        computed: {

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