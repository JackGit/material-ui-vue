<template>
    <div class="row">
        <div class="col s12">
            <h4 class="header">{{data.name}}</h4>
            <p>{{{data.description}}}</p>
            <real-demo :demo-name="data.demoComponentName"></real-demo>
            <source-code :code="'\r\n' + data.code"></source-code>
        </div>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'real-demo': require('./real-demo.vue'),
            'source-code': require('./source-code.vue')
        },

        props: {
            data: {
                type: Object
            }
        }
    };
</script>