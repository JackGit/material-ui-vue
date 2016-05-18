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

        /**
         * @prop label
         * @type {String}
         * @default ''
         * @description label of this button
         */

        /**
         * @prop type
         * @type {String}
         * @default ''
         * @description type of this button. '': raised button, by default. 'flat': flat button. 'floating': floating button
         */

        /**
         * @prop large
         * @type {Boolean}
         * @default false
         * @description set this prop as true to let this button has a larger height for buttons that need more attention
         */

        /**
         * @prop icon
         * @type {String}
         * @default ''
         * @description icon of this button
         */

        /**
         * @prop iconPosition
         * @type {String}
         * @default 'left'
         * @description icon position of the button icon. Possible values: 'left', 'right'
         */

        /**
         * @prop wavesEffect
         * @type {Boolean}
         * @default true
         * @description apple the waves effect of the button
         */

        /**
         * @prop lightWave
         * @type {Boolean}
         * @default true
         * @description apply the light-style waves effect to the button
         */

        /**
         * @prop
         * @type {Boolean}
         * @default false
         * @description indicate the button is disabled or not
         */

        /**
         * @prop items
         * @type {Array}
         * @default function() {return [];}
         * @description example value: [{href: '#!', label: 'item 1', badge: {label: '1', new: true}}, {href: '#!', label: 'item 2'}, {divider: true}]
         */

        /**
         * @prop inDuration
         * @type {Number}
         * @default 300
         * @description the duration of the transition enter in milliseconds
         */

        /**
         * @prop outDuration
         * @type {Number}
         * @default 225
         * @description the duration of the transition out in milliseconds
         */

        /**
         * @prop constrainWidth
         * @type {Boolean}
         * @default true
         * @description if true, constrainWidth to the size of the dropdown activator
         */

        /**
         * @prop hover
         * @type {Boolean}
         * @default true
         * @description if true, the dropdown will open on hover
         */

        /**
         * @prop gutter
         * @type {Number}
         * @default 0
         * @description this defines the spacing from the aligned edge
         */

        /**
         * @prop belowOrigin
         * @type {Boolean}
         * @default false
         * @description if true, the dropdown will show below the activator
         */

        /**
         * @prop alignment
         * @type {String}
         * @default 'left'
         * @description defines the edge the menu is aligned to. Possible values: 'left', 'right'
         */

        /**
         * @prop active
         * @type {Boolean}
         * @default false
         * @description indicate the nav-item is active or not
         */
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