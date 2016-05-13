<template>
    <div class="switch">
        <label>
            {{leftLabel}}
            <input v-el:input type="checkbox" v-model="value" :disabled="disabled">
            <span class="lever"></span>
            {{rightLabel}}
        </label>
    </div>
</template>

<script>
    /**
     * switch
     * @module forms/switch
     * @author Jack Yang
     * @description {@link http://materializecss.com/forms.html forms} switch component
     */
    module.exports = {
        props: {
            /**
             * @prop rightLabel
             * @type {String}
             * @default ''
             * @description right label of switch
             */
            rightLabel: {
                type: String,
                default: ''
            },
            /**
             * @prop leftLabel
             * @type {String}
             * @default ''
             * @description left label of switch
             */
            leftLabel: {
                type: String,
                default: ''
            },
            /**
             * @prop value
             * @type {Boolean}
             * @default false
             * @description value of switch. Set true means switch on. Set false means switch off
             */
            value: {
                type: Boolean,
                default: false
            },
            /**
             * @prop disabled
             * @type {Boolean}
             * @default false
             * @description indicate the switch disabled or not
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
                        this.$dispatch('switch-' + e.type, e);
                    }.bind(this));
                }
            }
        },
    }
</script>