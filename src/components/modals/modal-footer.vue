<template>
    <div class="modal-footer">
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        ready: function() {
            $(this.$el).find('a').addClass('modal-action');
        }
    };
</script>