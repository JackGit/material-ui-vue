<style>

</style>

<template>
    <div class="row">
        <text-field label="test field"
                    :value.sync="text"
                    :validate="true"
                    :error-message="text"
                    @change="handleChange"
                    @input="handleInput"
                    @click="handleClick"
                    :classes="['s12']"
                    success-message="right"
                    placeholder="holder here"></text-field>
    </div>
    <div class="row">
        <select-field label="select field"
                :options="[
                    {value:'',text:'please make choice',disabled:true},
                    {value:'1',text:'one',selected:true},
                    {value:'2',text:'two'}
                ]"></select-field>
    </div>

</template>

<script>
    var MUI = require('../src/index.js');

    module.exports = {
        components: {
            'text-field': MUI['text-field'],
            'select-field': MUI['select-field']
        },
        data: function() {
            return {
                text: '123'
            }
        },
        methods: {
            handleChange: function(e) {
                console.log(e);
            },
            handleInput: function(e) {
                console.log(e);
            },
            handleClick: function(e) {
                console.log('click', e.target);
            }
        }
    };
</script>