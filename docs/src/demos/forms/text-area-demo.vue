<template>
    <div class="row">
        <form class="col s12">
            <div class="row">
                <text-area class="col s12"
                           label="textarea"
                           value="this is the text content"
                           icon="mode_edit"></text-area>
            </div>
        </form>
    </div>
</template>

<script>
    /**
     * @example text-area demo
     * @for text-area
     * @description
     */
    module.exports = {
        components: {
            'text-area': require('material-ui-vue/components/forms/text-area.vue')
        }
    }
</script>