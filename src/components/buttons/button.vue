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

    module.exports = {
        mixins: [ButtonMixin]
    };
</script>