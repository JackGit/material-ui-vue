<template>
    <p class="range-field">
        <input type="range"
               v-el:input
               v-model="value"
               :min="min"
               :max="max"
               :disabled="disabled" />
    </p>
</template>

<script>
    /**
     * range
     * @module forms/range
     * @author Jack Yang
     * @description {@link http://materializecss.com/forms.html forms} range component
     */
    module.exports = {
        props: {
            /**
             * @prop min
             * @type {Number}
             * @default 0
             * @description set the min of range
             */
            min: {
                default: 0
            },
            /**
             * @prop max
             * @type {Number}
             * @default 100
             * @description set the max of range
             */
            max: {
                default: 100
            },
            /**
             * @prop value
             * @type {Number}
             * @default 50
             * @description set the current value of range
             */
            value: {
                default: 50
            },
            /**
             * @prop disabled
             * @type {Boolean}
             * @default false
             * @description indicate this range controller is disabled or not
             */
            disabled: {
                type: Boolean,
                default: false
            }
        },

        ready: function() {
            for(var p in this.$els.input) {
                if(p.startsWith('on')) {
                    $(this.$els.input).on(p.substring(2), function(e) {
                        this.$dispatch('range-' + e.type, e);
                    }.bind(this));
                }
            }
        }
    };
</script>