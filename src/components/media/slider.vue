<template>
    <div :class="classes">
        <ul class="slides">
            <li v-for="image in images">
                <img :src="image.src">
                <div :class="['caption', image.captionPosition ? image.captionPosition + '-align' : 'center-align']">
                    <h3>{{image.caption}}</h3>
                    <h5 class="light grey-text text-lighten-3">{{image.description}}</h5>
                </div>
            </li>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * slider
     * @module media/slider
     * @author Jack Yang
     * @description {@link http://materializecss.com/media.html Slider} is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider
     */
    module.exports = {
        props: {
            /**
             * @prop fullscreen
             * @type {Boolean}
             * @default false
             * @description make it a fullscreen slider
             */
            fullscreen: {
                type: Boolean,
                default: false
            },
            /**
             * @prop images
             * @type {Array}
             * @default function() {return [];}
             * @description images of the slider. Example value: [{src: 'path/to/your/image.png', caption: 'nice image', description: 'really?'}]
             */
            images: {
                type: Array,
                default: function() {return [];}
            },
            /**
             * @prop indicators
             * @type {Boolean}
             * @default true
             * @description set to false to hide slide indicators
             */
            indicators: {
                type: Boolean,
                default: true
            },
            /**
             * @prop height
             * @type {Number}
             * @default 400
             * @description set height of slider
             */
            height: {
                default: 400
            },
            /**
             * @prop transition
             * @type {Number}
             * @default 500
             * @description set the duration of the transition animation in ms
             */
            transition: {
                default: 500
            },
            /**
             * @prop interval
             * @type {Number}
             * @default 6000
             * @description set the duration between transitions in ms
             */
            interval: {
                default: 6000
            }
        },

        data: function() {
            return {
                classes: classes({
                    'slider': true,
                    'fullscreen': this.fullscreen
                })
            }
        },

        ready: function() {
            $(this.$el).slider({
                indicators: this.indicators,
                height: this.height,
                transition: this.transition,
                interval: this.interval
            });
        },

        methods: {
            /**
             * @method start
             * @description start the slider
             */
            start: function() {
                $(this.$el).slider('start');
            },
            /**
             * @method pause
             * @description pause the slider
             */
            pause: function() {
                $(this.$el).slider('pause');
            },
            /**
             * @method next
             * @description slide next
             */
            next: function() {
                $(this.$el).slider('next');
            },
            /**
             * @method prev
             * @description slide prev
             */
            prev: function() {
                $(this.$el).slider('prev');
            }
        }
    };
</script>