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
            this.componentDetails = {
                name: 'Badge',
                description: 'Badge description here',
                author: 'Jack Yang',
                props: [
                    {name: '', type: '', default: '', description: ''}
                ],
                methods: [],
                events: [],
                examples: [
                    {
                        name: '',
                        description: '',
                        code: '',
                        componentsPath: 'examples/components/badges/badges-in-navbar.vue'
                    }
                ]
            };
        },

        methods: {
            selectComponent: function(name) {
                this.currentComponent = name;
            }
        }
    };
</script>