<template>
    <main>
        <div v-if="currentModule.name" class="container">
            <h4 class="header">Introduction</h4>
            <p class="caption">{{{currentModule.description}}}</p>
            <example v-for="example in currentModule.examples" :data="example"></example>
            <properties v-if="currentModule.props.length" :data="currentModule.props"></properties>
            <methods v-if="currentModule.methods.length" :data="currentModule.methods"></methods>
        </div>
    </main>
</template>

<script>
    var actions = require('../vuex/actions.js');

    module.exports = {
        components: {
            'example': require('./example.vue'),
            'properties': require('./properties.vue'),
            'methods': require('./methods.vue')
        },

        /*watch: {
            modules: function(value) {
                if(value.length > 0)
                    this.selectModule(this.$route.params.component);
            }
        },*/

        ready: function() {
            this.selectModule(this.$route.params.component);
        },

        vuex: {
            getters: {
                currentModule: function(state) {
                    return state.currentModule;
                },
                modules: function(state) {
                    return state.modules;
                }
            },
            actions: {
                selectModule: actions.selectModule
            }
        },

        route: {
            // don't reuse this component in router, coz component data will be retrieved and re-render
            canReuse: false
        }
    }
</script>