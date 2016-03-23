<template>
    <ul :id="id" :class="navClasses">
        <slot></slot>
    </ul>
</template>

<script>
    var classes = require('../../Util.js').classes;

    module.exports = {
        props: {
            menuWidth: {
                type: Number,
                default: 240
            },
            edge: {
                type: String,
                default: 'left'
            },
            closeOnClick: {
                type: Boolean,
                default: false
            },
            showOnLarge: {
                type: Boolean,
                default: false
            },
            fixed: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                navClasses: classes({
                    'side-nav': true,
                    'fixed': this.fixed
                }),
                collapseButtonClasses: classes({
                    'button-collapse': true,
                    'show-on-large': this.showOnLarge
                })
            }
        }
    }
</script>