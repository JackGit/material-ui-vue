<template>
    <span :class="classes"><slot></slot></span>
</template>

<script>
    var classes = require('../Util.js').classes;

    module.exports = {
        props: {
            new: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                classes: classes({
                    'badge': true,
                    'new': this.new
                })
            }
        }
    };
</script>