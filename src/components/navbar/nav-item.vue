<template>
    <li :class="[active ? 'active' : '']">
        <slot></slot>
    </li>
</template>

<script>
    var NavItemPropMixin = require('../../mixins/NavItemPropMixin.js');

    /**
     * nav item
     * @module navbar/nav-item
     * @author Jack Yang
     * @description a component for nav-item
     */
    module.exports = {
        mixins: [NavItemPropMixin]
    };
</script>