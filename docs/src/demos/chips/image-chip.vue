<template>
    <chip label="Jane Joe" :image="imageUrl"></chip>
</template>

<script>
    /**
     * @example chip with image
     * @for chip
     * @description
     */
    module.exports = {
        components: {
            'chip': require('material-ui-vue/components/chips/chip.vue')
        },

        data: function() {
            return {
                imageUrl: 'http://materializecss.com/images/yuna.jpg'
            };
        }
    };
</script>