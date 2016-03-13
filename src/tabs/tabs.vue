<style>

</style>

<template>
    <div>
        <ul class="tabs">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    /*
        usage:
        <tabs>
            <tab label='Test 1'>
                Test 1
            </tab>
            <tab label='Test 2' active>
                Test 2
            </tab>
            <tab label='Test 3' disabled>
                Test 3
            </tab>
        </tabs>
     */

    /*
        after compiled:
        <div>
            <ul class="tabs">
                <li class="tab col s3"><a href="#test5">Test 1</a></li>
                <li class="tab col s3"><a class="active" href="#test6">Test 2</a></li>
                <li class="tab col s3 disabled"><a href="#test7">Disabled Tab</a></li>
            </ul>
            <div id="test5">Test 1</div>
            <div id="test6">Test 2</div>
            <div id="test7">Test 3</div>
        </div>
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