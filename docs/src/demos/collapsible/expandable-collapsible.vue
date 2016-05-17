<template>
    <collapsible behavior="expandable">
        <collapsible-item>
            <collapsible-header active label="First" icon="filter_drama"></collapsible-header>
            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>
        </collapsible-item>
        <collapsible-item>
            <collapsible-header label="Second" icon="place"></collapsible-header>
            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>
        </collapsible-item>
        <collapsible-item>
            <collapsible-header label="Third" icon="whatshot"></collapsible-header>
            <collapsible-body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></collapsible-body>
        </collapsible-item>
    </collapsible>
</template>

<script>
    /**
     * @example expandable collapsible
     * @for collapsible
     * @description
     */
    module.exports = {
        components: {
            'collapsible': require('material-ui-vue/components/collapsible/collapsible.vue'),
            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue'),
            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),
            'collapsible-item': require('material-ui-vue/components/collapsible/collapsible-item.vue')
        }
    };
</script>