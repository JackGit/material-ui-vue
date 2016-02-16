<style>

</style>

<template>
    <div class="input-field col s12">
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
                default: []
            }
        },

        data: function() {
            return {
                id: uuid.v1()
            }
        },

        ready: function() {
            $(this.$els.select).material_select();
        }
    };
</script>