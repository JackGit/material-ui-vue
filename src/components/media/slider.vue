<template>
    <div :class="classes">
        <ul class="slides">
            <li v-for="image in images">
                <img :src="image.url">
                <div class="caption center-align">
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
            fullWidth: {
                type: Boolean,
                default: true
            },
            fullscreen: {
                type: Boolean,
                default: false
            },
            images: {
                type: Array, // {url: '', caption: '', description: ''}
                default: function() {return [];}
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
            $(this.$el).slider({full_width: this.fullWidth});
        }
    };
</script>