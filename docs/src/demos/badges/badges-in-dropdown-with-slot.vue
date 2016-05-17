<template>
    <dropdown label="dropdown">
        <ul>
            <li><a href="#!">Inbox<badge new class="red">12</badge></a></li>
            <li><a href="#!">Outbox</a></li>
            <li><a href="#!">Draft<badge label="3"></badge></a></li>
        </ul>
    </dropdown>
</template>

<script>
    /**
     * @example badges in dropdown via slot
     * @for badge
     * @description you can put badges in dropdown by adding child elements
     */
    module.exports = {
        components: {
            'badge': require('material-ui-vue/components/badges/badge.vue'),
            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')
        }
    };
</script>