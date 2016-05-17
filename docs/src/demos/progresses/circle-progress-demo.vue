<template>
    <div class="row">
        <circle-progress color="red"></circle-progress>
        <circle-progress color="teal" size="small"></circle-progress>
        <circle-progress color="yellow" size="big"></circle-progress>
        <circle-progress active flash></circle-progress>
    </div>
</template>

<script>
    /**
     * @example circle-progress demo
     * @for circle-progress
     * @description
     */
    module.exports = {
        components: {
            'circle-progress': require('material-ui-vue/components/progresses/circle-progress.vue')
        }
    };
</script>