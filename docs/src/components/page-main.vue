<template>
    <main>
        <div class="container">
            <p class="caption">{{componentDetails.description}}</p>
            <example v-for="example in componentDetails.examples" :data="example"></example>
            <properties :data="componentDetails.props"></properties>
            <methods :data="componentDetails.methods"></methods>
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