<template>
    <badge-in-navbar></badge-in-navbar>
    <badge-in-dropdown></badge-in-dropdown>
    <badge-in-dropdown-in-slot></badge-in-dropdown-in-slot>
    <badge-in-collections></badge-in-collections>
    <badge-in-collections-in-slot></badge-in-collections-in-slot>
</template>

<script>
    var components = [
        {name: 'badge-in-dropdown', path: './components/badges/badges-in-dropdown.vue'},
        {name: 'badge-in-dropdown-in-slot', path: './components/badges/badges-in-dropdown-in-slot.vue'},
        {name: 'badge-in-collections', path: './components/badges/badges-in-collections.vue'}
    ];

    module.exports = {
        components: function() {
            var coms = [];
            components.forEach(function(c) {
                var t = {};
                t[c.name] = require(c.path);
                coms.push(t);
            });
            return coms;
        }
    };
</script>