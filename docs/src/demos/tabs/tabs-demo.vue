<template>
    <div class="row">
        <tabs>
            <tab label="Test 1" >
                Test 1 Page
            </tab>
            <tab label="Test 2" acitve>
                Test 2 Page
            </tab>
            <tab label="Disabled Tab" disabled>
                Test 3 page
            </tab>
            <tab label="Test 4">
                Test 4 page
            </tab>
        </tabs>
    </div>
</template>

<script>
    /**
     * @example tabs demo
     * @for tabs
     * @description
     */
    module.exports = {
        components: {
            'tabs': require('material-ui-vue/components/tabs/tabs.vue'),
            'tab': require('material-ui-vue/components/tabs/tab.vue')
        }
    };
</script>