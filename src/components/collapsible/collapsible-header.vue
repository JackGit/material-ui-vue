<template>
    <div :class="['collapsible-header', active ? 'active' : '']">
        <mui-icon v-if="icon" :value="icon" :class="iconPosition"></mui-icon>
        {{label}}
    </div>
</template>

<script>
    /**
     * collapsible
     * @module collapsible/collapsible-header
     * @author Jack Yang
     * @description a component for collapsible-header
     */
    module.exports = {
        components: {
            'mui-icon': require('../icons/icon.vue')
        },

        props: {
            /**
             * @prop label
             * @type {String}
             * @default ''
             * @description
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop icon
             * @type {String}
             * @default ''
             * @description the icon of the collapsible-header
             */
            icon: {
                type: String,
                default: ''
            },
            /**
             * @prop iconPosition
             * @type {String}
             * @default 'left'
             * @description indicate the position of the icon. Possible values: 'left', 'right'
             */
            iconPosition: {
                type: String,
                default: 'left'
            },
            /**
             * @prop active
             * @type {Boolean}
             * @default false
             * @description indicate the collapsible open status
             */
            active: {
                type: Boolean,
                default: false
            }
        }
    };
</script>