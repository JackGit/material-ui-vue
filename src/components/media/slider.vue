<template>
    <div :class="classes">
        <ul class="slides">
            <li v-for="image in images">
                <img :src="image.url">
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

    module.exports = {
        props: {
            fullscreen: {
                type: Boolean,
                default: false
            },
            images: {
                type: Array, // {url: '', caption: '', description: ''}
                default: function() {return [];}
            },
            indicators: {
                type: Boolean,
                default: true
            },
            height: {
                default: 400
            },
            transition: {
                default: 500
            },
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
            start: function() {
                $(this.$el).slider('start');
            },
            pause: function() {
                $(this.$el).slider('pause');
            },
            next: function() {
                $(this.$el).slider('next');
            },
            prev: function() {
                $(this.$el).slider('prev');
            }
        }
    };
</script>