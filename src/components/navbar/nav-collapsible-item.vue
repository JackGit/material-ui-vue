<template>
    <li :class="['no-padding', active ? 'active' : '']">
        <collapsible>
            <collapsible-item><slot></slot></collapsible-item>
        </collapsible>
    </li>
</template>

<script>
    var NavItemPropMixin = require('../../mixins/NavItemPropMixin.js');

    module.exports = {
        mixins: [NavItemPropMixin],

        components: {
            'collapsible': require('../collapsible/collapsible.vue'),
            'collapsible-item': require('../collapsible/collapsible-item.vue')
        }
    };
</script>