<template>
    <div>
        <page></page>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'page': require('./components/page.vue')
        },

        data: function() {
            return {
                components: ['badges', 'buttons'],
                currentComponent: 'badges',
                componentDetails: {}
            }
        },

        ready: function() {

        },

        methods: {
            selectComponent: function(name) {
                this.currentComponent = name;
            }
        }
    };
</script>