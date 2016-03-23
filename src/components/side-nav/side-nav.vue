<template>
    <ul :class="navClasses">
        <slot></slot>
    </ul>
</template>

<script>
    var classes = require('../../Util.js').classes;

    module.exports = {
        props: {
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
                })
            }
        }
    }
</script>