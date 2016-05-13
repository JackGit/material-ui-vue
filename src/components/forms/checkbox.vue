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

    /**
     * checkbox
     * @module forms/checkbox
     * @author Jack Yang
     * @description {@link http://materializecss.com/forms.html forms} checkbox component
     */
    module.exports = {
        props: {
            /**
             * @prop selected
             * @type {Array}
             * @default function() {return [];}
             * @description indicate the items been selected. Value should come from value attribute of item object. Example value: ['red', 'green']
             */
            selected: {
                type: Array,
                default: function() {return [];}
            },
            /**
             * @prop items
             * @type {Array}
             * @default function() {return [];}
             * @description items of the checkbox. Example value: [{label: 'RED', value: 'red', disabled: false}, {label: 'GREEN', value: 'green', disabled: true}]
             */
            items: {
                type: Array,
                default: function() {return [];}
            },
            /**
             * @prop filledIn
             * @type {Boolean}
             * @default false
             * @description indicate use filled-in style or not
             */
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