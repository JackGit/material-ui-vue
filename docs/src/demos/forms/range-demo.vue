<template>
    <div class="row">
        <form>
            <div class="row">
                <range min="0" max="100" value="61"></range>
                <range min="0" max="100" value="10" disabled></range>
            </div>

        </form>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'range': require('material-ui-vue/components/forms/range.vue')
        }
    }
</script>