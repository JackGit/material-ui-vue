<template>
    <ul :class="['collapsible', popout ? 'popout' : '']" :data-collapsible="behavior">
        <slot></slot>
    </ul>
</template>

<script>
    module.exports = {
        props: {
            behavior: {
                type: String,
                default: 'accordion',   // 'expandable'
            },
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