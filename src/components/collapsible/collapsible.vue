<template>
    <ul :class="['collapsible', popout ? 'popout' : '']" :data-collapsible="behavior">
        <slot></slot>
    </ul>
</template>

<script>
    /**
     * collapsible
     * @module collapsible/collapsible
     * @author Jack Yang
     * @description {@link http://materializecss.com/collapsible.html Collapsibles} are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.
     */
    module.exports = {
        props: {
            /**
             * @prop behavior
             * @type {String}
             * @default 'accordion'
             * @description indicate the behavior of the collapsible. Possible values: 'accordion', 'expandable'
             */
            behavior: {
                type: String,
                default: 'accordion'
            },
            /**
             * @prop popout
             * @type {Boolean}
             * @default false
             * @description set as true to create a popout collapsible
             */
            popout: {
                type: Boolean,
                default: false
            }
        },

        ready: function() {
            $(this.$el).collapsible();
        }
    };
</script>