<template>
    <div>
        <p v-for="item in items">
            <input type="radio"
                   v-model="selected"
                   :class="[withGap ? 'with-gap' : '']"
                   :name="group"
                   :id="'_' + group + item.value"
                   :value="item.value"
                   :disabled="item.disabled"/>
            <label :for="'_' + group + item.value">{{item.label}}</label>
        </p>
    </div>
</template>

<script>

    var uuid = require('uuid');

    module.exports = {
        props: {
            group: {
                type: String,
                default: ''
            },
            withGap: {
                type: Boolean,
                default: false
            },
            selected: {
                type: String,
                default: ''
            },
            items: {
                type: Array,    // {label: '', value: '', disabled: false}
                default: function() {return [];}
            }
        },

        watch: {
            selected: function(value) {

            }
        },

        ready: function() {
            var that = this;

            $(this.$el).find('input[type="radio"]').each(function() {
                for(var p in this) {
                    if(p.startsWith('on')) {
                        $(this).on(p.substring(2), function(e) {
                            that.$dispatch('radio-' + e.type, e);
                        });
                    }
                }
            });
        },

        methods: {

        }
    };
</script>