<style>

</style>

<template>
    <div class="row">
        <text-field label="test field" value="this value" placeholder="holder here"></text-field>
    </div>

</template>

<script>
    var MUI = require('../src/index.js');

    module.exports = {
        components: {
            'text-field': MUI['text-field']
        }
    };
</script>