<template>
    <div class="row">
        <linear-progress color="red" background-color="red lighten-4"></linear-progress>
        <linear-progress color="red" background-color="red lighten-4" determinate :percentage="33"></linear-progress>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'linear-progress': require('material-ui-vue/components/progresses/linear-progress.vue')
        }
    }
</script>