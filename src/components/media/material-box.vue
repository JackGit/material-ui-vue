<template>
    <img class="materialboxed" :src="imageUrl" :data-caption="caption">
</template>

<script>
    /**
     * material box
     * @module media/material-box
     * @author Jack Yang
     * @description {@link http://materializecss.com/media.html Material box} is a material design implementation of the Lightbox plugin. When a user clicks on an image that can be enlarged. Material box centers the image and enlarges it in a smooth, non-jarring manner. To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key
     */
    module.exports = {
        props: {
            /**
             * @prop imageUrl
             * @type {String}
             * @default ''
             * @description url of the image
             */
            imageUrl: {
                type: String,
                default: ''
            },
            /**
             * @prop caption
             * @type {String}
             * @default ''
             * @description caption of the image
             */
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