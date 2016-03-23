<template>
    <li :class="[active ? 'active' : '']">
        <slot></slot>
    </li>
</template>

<script>
    var NavItemPropMixin = require('../../mixins/NavItemPropMixin.js');
    module.exports = {
        mixins: [NavItemPropMixin]
    };
</script>