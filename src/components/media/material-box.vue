<template>
    <img class="materialboxed" :src="imageUrl" :data-caption="caption">
</template>

<script>
    module.exports = {
        props: {
            imageUrl: {
                type: String,
                default: ''
            },
            caption: {
                type: String,
                default: ''
            }
        },

        ready: function() {
            $(this.$el).materialbox();
        }
    };
</script>