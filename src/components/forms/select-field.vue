<template>
    <div class="input-field">
        <select v-el:select>
            <option v-for="option in options"
                    :value="option.value"
                    :disabled="option.disabled"
                    :selected="option.selected">{{option.text}}</option>
        </select>
        <label>{{label}}</label>
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
                type: Array,    // {value: '', text: '', disabled: false, selected: false}
                default: function() {return [];}
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
            disabled: function() {
                $(this.$els.select).material_select();
            }
        },

        ready: function() {
            var that = this;

            $(this.$els.select).material_select();
            $(this.$els.select).on('change', function(e) {
                var val = $(this).val();
                that.options.forEach(function(o) {
                    if(o.value == val)
                        o.selected = true;
                    else
                        o.selected = false;
                });

                that.$dispatch('select-field-' + e.type, e);
            });
        },

        destroyed: function() {
            $(this.$els.select).material_select('destroy');
        }
    };
</script>