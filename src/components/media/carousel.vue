<template>
    <div :class="classes">
        <a v-for="image in images" class="carousel-item" :href="image.href ? image.href : '#!'">
            <img :src="image.url">
        </a>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;

    module.exports = {

        props: {
            images: {
                type: Array,
                default: function() {return [];}
            },
            slider: {
                type: Boolean,
                default: false
            },
            dist: {
                default: -100
            },
            timeConstant: {
                default: 200
            },
            shift: {
                default: 0
            },
            padding: {
                default: 0
            },
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
            next: function(n) {
                if(n)
                    $(this.$el).carousel('next', [n]);
                else
                    $(this.$el).carousel('next');
            },
            prev: function(n) {
                if(n)
                    $(this.$el).carousel('prev', [n]);
                else
                    $(this.$el).carousel('prev');
            }
        }
    };
</script>