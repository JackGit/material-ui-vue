<template>
    <li :class="['no-padding', active ? 'active' : '']">
        <collapsible>
            <li><slot></slot></li>
        </collapsible>
    </li>
</template>

<script>
    var NavItemPropMixin = require('../mixins/NavItemPropMixin.js');

    module.exports = {
        mixins: [NavItemPropMixin],

        components: {
            collapsible: require('../collapsible/collapsible.vue')
        }
    };
</script>