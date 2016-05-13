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
    /**
     * radio
     * @module forms/radio
     * @author Jack Yang
     * @description {@link http://materializecss.com/forms.html forms} radio component
     */
    module.exports = {
        props: {
            /**
             * @prop group
             * @type {String}
             * @default ''
             * @description the group name of this radios
             */
            group: {
                type: String,
                default: ''
            },
            /**
             * @prop withGap
             * @type {Boolean}
             * @default false
             * @description indicate apply with-gap style or not
             */
            withGap: {
                type: Boolean,
                default: false
            },
            /**
             * @prop selected
             * @type {String}
             * @default ''
             * @description indicate which item is selected. Value should come from value attribute of item object. Example value: 'green'
             */
            selected: {
                type: String,
                default: ''
            },
            /**
             * @prop items
             * @type {Array}
             * @default function() {return [];}
             * @description radio items data. Example value: [{label: 'RED', value: 'red', disabled: false}, {label: 'GREEN', value: 'green', disabled: true}]
             */
            items: {
                type: Array,    // {label: '', value: '', disabled: false}
                default: function() {return [];}
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
        }
    };
</script>