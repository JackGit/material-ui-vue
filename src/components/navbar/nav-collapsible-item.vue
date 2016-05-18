<template>
    <li :class="['no-padding', active ? 'active' : '']">
        <collapsible>
            <collapsible-item><slot></slot></collapsible-item>
        </collapsible>
    </li>
</template>

<script>
    var NavItemPropMixin = require('../../mixins/NavItemPropMixin.js');

    /**
     * nav collapsible item
     * @module navbar/nav-collapsible-item
     * @author Jack Yang
     * @description collapsible menu component in navbar. When your nav bar is resized, you will see that the links on the right turn into a hamburger icon
     */
    module.exports = {
        /**
         * @prop active
         * @type {Boolean}
         * @default false
         * @description indicate the nav-item is active or not
         */
        mixins: [NavItemPropMixin],

        components: {
            'collapsible': require('../collapsible/collapsible.vue'),
            'collapsible-item': require('../collapsible/collapsible-item.vue')
        }
    };
</script>