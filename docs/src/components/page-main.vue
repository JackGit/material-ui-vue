<template>
    <main>
        <div class="container">
            <h4 class="header">Introduction</h4>
            <p class="caption">{{{componentDetails.description}}}</p>
            <example v-for="example in componentDetails.examples" :data="example"></example>
            <properties v-if="componentDetails.props.length" :data="componentDetails.props"></properties>
            <methods v-if="componentDetails.methods.length" :data="componentDetails.methods"></methods>
        </div>
    </main>
</template>

<script>
    module.exports = {
        components: {
            'example': require('./example.vue'),
            'properties': require('./properties.vue'),
            'methods': require('./methods.vue')
        },

        props: {
            componentDetails: {
                type: Object,
                default: function() {return {};}
            }
        }
    }
</script>