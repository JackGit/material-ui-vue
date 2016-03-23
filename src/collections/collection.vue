<template>
    <ul :class="ulClasses">
        <slot></slot>
    </ul>
</template>

<script>
    var classes = require('../Util.js').classes;

    module.exports = {
        props: {
            withHeader: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                ulClasses: classes({
                    'collection': true,
                    'with-header': this.withHeader
                })
            }
        }
    };
</script>