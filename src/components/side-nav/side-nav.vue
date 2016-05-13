<template>
    <ul :class="navClasses">
        <slot></slot>
    </ul>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * side nav
     * @module side-nav/side-nav
     * @author Jack Yang
     * @description This is a slide out menu. You can add a dropdown to your sidebar by using our collapsible component. If you want to see a demo, our sidebar will use this on smaller screens. To use this in conjunction with a fullscreen navigation, you have to use two copies of the same UL
     */
    module.exports = {
        props: {
            /**
             * @prop fixed
             * @type {Boolean}
             * @default false
             * @description indicate this is a fixed side-nav or not
             */
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