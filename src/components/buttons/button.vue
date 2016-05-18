<template>
    <a :class="buttonClasses">
        <icon v-if="icon" :value="icon" :class="iconPosition"></icon>
        {{label}}
        <slot></slot>
    </a>
</template>

<script>
    require('../../directives/Tooltip.js');
    var ButtonMixin = require('../../mixins/ButtonMixin.js');

    /**
     * button
     * @module buttons/button
     * @author Jack Yang
     * @description There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.
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

        mixins: [ButtonMixin]
    };
</script>