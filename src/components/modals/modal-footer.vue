<template>
    <div class="modal-footer">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * modal footer
     * @module modals/modal-footer
     * @author Jack Yang
     * @description a component for modal-footer
     */
    module.exports = {
        ready: function() {
            $(this.$el).find('a').addClass('modal-action');
        }
    };
</script>