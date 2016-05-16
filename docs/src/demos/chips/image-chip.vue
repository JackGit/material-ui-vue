<template>
    <chip label="Jane Joe" :image="imageUrl"></chip>
</template>

<script>
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