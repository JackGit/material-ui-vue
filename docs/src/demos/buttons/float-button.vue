<template>
    <div>
        <float-button type="floating" icon="add" large class="red"></float-button>
    </div>
</template>

<script>
    /**
     * @example float button
     * @for button
     * @description
     */
    module.exports = {
        components: {
            'float-button': require('material-ui-vue/components/buttons/button.vue')
        }
    };
</script>