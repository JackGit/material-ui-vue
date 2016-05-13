<template>
    <li :class="[active ? 'active' : '']">
        <dropdown type="none" icon="arrow_drop_down" :icon-position="iconPosition" :label="label" :items="items" :hover="false">
            <slot></slot>
        </dropdown>
    </li>
</template>

<script>
    var ButtonPropMixin = require('../../mixins/ButtonPropMixin.js');
    var DropdownPropMixin = require('../../mixins/DropdownPropMixin.js');
    var NavItemPropMixin = require('../../mixins/NavItemPropMixin.js');

    /**
     * nav dropdown item
     * @module navbar/nav-dropdown-item
     * @author Jack Yang
     * @description dropdown menu component in navbar
     */
    module.exports = {
        mixins: [ButtonPropMixin, DropdownPropMixin, NavItemPropMixin],

        components: {
            dropdown: require('../dropdown/dropdown.vue')
        },

        props: {
            /**
             * @prop iconPosition
             * @type {String}
             * @default 'right'
             * @description icon position of the nav-dropdown-item
             */
            iconPosition: {
                type: String,
                default: 'right'
            }
        }
    };
</script>