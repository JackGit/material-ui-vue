<template>
    <dropdown label="Dropdown with slot">
        <ul>
            <li><a href="#!">One</a></li>
            <li class="divider"></li>
            <li><a href="#!">Two</a></li>
            <li><a href="#!">Three</a></li>
        </ul>
    </dropdown>
</template>

<script>
    /**
     * @example dropdown with slot
     * @for dropdown
     * @description
     */
    module.exports = {
        components: {
            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue')
        }
    };
</script>