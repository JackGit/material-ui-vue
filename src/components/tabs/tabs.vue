<template>
    <div>
        <ul class="tabs">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    module.exports = {
        ready: function() {
            var that = this;

            // move tab page element from "tab" component to "tabs" component, and append after ul element
            this.$children.forEach(function(tab) {
                $(that.$el).append(tab.$el.children[1]);
            });

            $(this.$el).find('.tabs').tabs();
        }
    };
</script>