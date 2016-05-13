<template>
    <badge-in-navbar></badge-in-navbar>
    <badge-in-dropdown></badge-in-dropdown>
    <badge-in-dropdown-in-slot></badge-in-dropdown-in-slot>
    <badge-in-collections></badge-in-collections>
    <badge-in-collections-in-slot></badge-in-collections-in-slot>
</template>

<script>
    module.exports = {
        components: {
            'badge-in-dropdown': require('./components/badges/badges-in-dropdown.vue'),
            'badge-in-dropdown-in-slot': require('./components/badges/badges-in-dropdown-in-slot.vue'),
            'badge-in-collections': require('./components/badges/badges-in-collections.vue'),
            'badge-in-collections-in-slot': require('./components/badges/badges-in-collections-in-slot.vue'),
            'badge-in-navbar': require('./components/badges/badges-in-navbar.vue')
        }
    };
</script>