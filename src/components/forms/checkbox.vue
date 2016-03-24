<template>
    <div>
        <p v-for="item in items">
            <input type="checkbox"
                   v-model="selected"
                   :class="[filledIn ? 'filled-in' : '']"
                   :value="item.value"
                   :id="'_' + id + item.value"
                   :disabled="item.disabled" />
            <label :for="'_' + id + item.value">{{item.label}}</label>
        </p>
    </div>
</template>

<script>
    var uuid = require('uuid');

    module.exports = {
        props: {
            selected: {
                type: Array,
                default: function() {return [];}
            },
            items: {
                type: Array,
                default: function() {return [];}
            },
            filledIn: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                id: uuid.v1()
            };
        },

        ready: function() {
            var that = this;

            $(this.$el).find('input[type="checkbox"]').each(function() {
                for(var p in this) {
                    if(p.startsWith('on')) {
                        $(this).on(p.substring(2), function(e) {
                            that.$dispatch('checkbox-' + e.type, e);
                        });
                    }
                }
            });
        }
    };
</script>