<template>
    <div class="input-field">
        <select v-el:select v-model="selected">
            <option v-for="option in options"
                    :value="option.value"
                    :disabled="option.disabled">{{option.text}}</option>
        </select>
        <label>{{label}}<slot></slot></label>
    </div>
</template>

<script>
    var Vue = require('vue');
    var uuid = require('uuid');


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
                type: Array,    // {value: '', text: '', disabled: false}
                default: function() {return [];}
            },
            selected: {
                type: String,
                default: ''
            }
        },

        data: function() {
            return {
                id: uuid.v1()
            }
        },

        watch: {
            options: {
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