<template>
    <div class="parallax-container" :style="{height: height + 'px'}">
        <div class="parallax"><img :src="imageUrl"></div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            imageUrl: {
                type: String,
                default: ''
            },
            height: {
                default: 500
            }
        },

        ready: function() {
            $(this.$el).find('.parallax').parallax();
        }
    }
</script>