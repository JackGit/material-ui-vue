<template>
    <div :class="classes">
        <a v-for="image in images" class="carousel-item" :href="image.href ? image.href : '#!'">
            <img :src="image.src">
        </a>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * carousel
     * @module media/carousel
     * @author Jack Yang
     * @description Our slider is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider
     */
    module.exports = {

        props: {
            /**
             * @prop images
             * @type {Array}
             * @default function() {return [];}
             * @description image data. Example value: [{src: 'path/to/your/image.png', href: '#!'}]
             */
            images: {
                type: Array,
                default: function() {return [];}
            },
            /**
             * @prop slider
             * @type {Boolean}
             * @default false
             * @description indicate the carousel in a slider-type
             */
            slider: {
                type: Boolean,
                default: false
            },
            /**
             * @prop dist
             * @type {Number}
             * @default -100
             * @description perspective zoom. If 0, all items are the same size
             */
            dist: {
                default: -100
            },
            /**
             * @prop timeConstant
             * @type {Number}
             * @default 200
             * @description transition time
             */
            timeConstant: {
                default: 200
            },
            /**
             * @prop shift
             * @type {Number}
             * @default 0
             * @description spacing for center image
             */
            shift: {
                default: 0
            },
            /**
             * @prop padding
             * @type {Number}
             * @default 0
             * @description padding between non center items
             */
            padding: {
                default: 0
            },
            /**
             * @prop fullWidth
             * @type {Boolean}
             * @default false
             * @description change to full width styles
             */
            fullWidth: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                classes: classes({
                    'carousel': true,
                    'carousel-slider': this.slider
                })
            }
        },

        ready: function() {
            $(this.$el).carousel({
                time_constant: this.timeConstant,
                dist: this.dist,
                shift: this.shift,
                padding: this.padding,
                full_width: this.fullWidth
            });
        },

        methods: {
            /**
             * @method next
             * @param {Number} n - move next n pages
             * @description move to next page(s)
             */
            next: function(n) {
                if(n)
                    $(this.$el).carousel('next', [n]);
                else
                    $(this.$el).carousel('next');
            },
            /**
             * @method prev
             * @param {Number} n - move prev n pages
             * @description move to prev page(s)
             */
            prev: function(n) {
                if(n)
                    $(this.$el).carousel('prev', [n]);
                else
                    $(this.$el).carousel('prev');
            }
        }
    };
</script>