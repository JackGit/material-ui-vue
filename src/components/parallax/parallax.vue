<template>
    <div class="parallax-container" :style="{height: height + 'px'}">
        <div class="parallax"><img :src="imageSrc"></div>
    </div>
</template>

<script>
    /**
     * parallax
     * @module parallax/parallax
     * @author Jack Yang
     * @description {@link http://materializecss.com/parallax.html Parallax} is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling
     */
    module.exports = {
        props: {
            /**
             * @prop imageSrc
             * @type {String}
             * @default ''
             * @description src of image of the parallax
             */
            imageSrc: {
                type: String,
                default: ''
            },
            /**
             * @prop height
             * @type {Number}
             * @default 500
             * @description define the height (px) of the parallax
             */
            height: {
                default: 500
            }
        },

        ready: function() {
            $(this.$el).find('.parallax').parallax();
        }
    }
</script>