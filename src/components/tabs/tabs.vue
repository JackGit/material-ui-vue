<template>
    <div>
        <ul class="tabs">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    /**
     * tabs
     * @module tabs/tabs
     * @author Jack Yang
     * @description The {@link http://materializecss.com/tabs.html tabs} structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible
     */
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