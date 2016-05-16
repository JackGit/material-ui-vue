<template>
    <div>
        <page-header></page-header>
        <page-main :component-details="demo"></page-main>
        <page-footer></page-footer>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'page-header': require('./page-header.vue'),
            'page-main': require('./page-main.vue'),
            'page-footer': require('./page-footer.vue')
        },

        data: function() {
            return {
                demo: {
                    name: 'badge',
                    description: 'this is badge description',
                    props: [
                        {name: 'p1', description: 'description of p1', type: 'String', default: ''},
                        {name: 'p2', description: 'description of p2', type: 'Date', default: ''}
                    ],
                    methods: [
                        {name: 'init', description: 'init description'},
                        {name: 'destroy', description: 'destroy description'}
                    ],
                    examples: [
                        {name: 'badge demo 1', description: 'this is badge demo 1', code: '<div>1</div>', demoComponentName: 'badges-in-dropdown'},
                        {name: 'badge demo 2', description: 'this is badge demo 2', code: '<div>2</div>', demoComponentName: 'badges-in-collections'}
                    ]
                }
            }
        }
    };
</script>