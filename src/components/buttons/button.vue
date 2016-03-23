<template>
    <a :class="buttonClasses">
        <icon v-if="icon" :value="icon" :class="iconPosition"></icon>
        {{label}}
    </a>
</template>

<script>
    var ButtonMixin = require('../../mixins/ButtonMixin.js');

    module.exports = {
        mixins: [ButtonMixin]
    };
</script>