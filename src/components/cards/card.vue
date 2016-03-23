<template>
    <div :class="['card', size]">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: {
            size: {
                type: String,
                default: ''   // 'small', 'medium', 'large'
            },
            revealed: {
                type: Boolean,
                default: false
            }
        },

        ready: function() {
            if(this.revealed)
                setTimeout(function() {
                    $(this.$el).find('.activator').trigger('click');
                }.bind(this), 10);
        }
    };
</script>