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
        mixins: [ButtonMixin]
    };
</script>