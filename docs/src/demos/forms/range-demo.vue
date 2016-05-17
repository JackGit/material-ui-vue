<template>
    <form>
        <div class="row">
            <range min="0" max="100" value="61"></range>
            <range min="0" max="100" value="10" disabled></range>
        </div>
    </form>
</template>

<script>
    /**
     * @example basic range and disabled range
     * @for range
     * @description
     */
    module.exports = {
        components: {
            'range': require('material-ui-vue/components/forms/range.vue')
        }
    }
</script>