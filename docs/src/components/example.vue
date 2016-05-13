<template>
    <div class="row">
        <demo-component></demo-component>
        <source-code></source-code>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'demo-component': require('./demo-component.vue'),
            'source-code': require('./source-code.vue')
        }
    };
</script>