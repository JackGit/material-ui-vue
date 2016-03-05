<style>

</style>

<template>
    <div class="row">
        <text-field label="text field"
                    :validate="true"
                    class="col s12"
                    @text-field-input="handleEvent"
                    @text-field-click="handleEvent"
                    @text-field-blur="handleEvent"
                    @text-field-keydown="handleEvent"
                    @text-field-keyup="handleEvent"
                    @text-field-focus="handleEvent"
                    @text-field-change="handleEvent"
                    success-message="right"></text-field>

        <text-field label="text field"
                    icon="phone"
                    :disabled="true"
                    :value.sync="text"
                    :validate="true"
                    class="col s12"></text-field>

        <text-field label="Email"
                    icon="email"
                    type="email"
                    :validate="true"
                    class="col s12"
                    error-message="wrong email"
                    success-message="correct email"></text-field>

        <text-field label="password"
                    :value.sync="text"
                    :validate="true"
                    type="password"
                    class="col s12"
                    success-message="right"
                    placeholder="enter your password"></text-field>

        <text-area class="col s12"
                   label="my text field"
                   value="this is description"
                   @input="handleEvent"
                   icon="phone"></text-area>
    </div>
    <div class="row">
        <select-field
                label="select field"
                :options="options"></select-field>
    </div>

    <icon class="red-text" value="add"></icon>



</template>

<script>
    var MUI = require('../src/index.js');


    module.exports = {
        components: {
            'icon': MUI['icon'],
            'text-field': MUI['text-field'],
            'text-area': MUI['text-area'],
            'select-field': MUI['select-field']
        },

        methods: {
            handleEvent: function(e) {
                console.log(e.type, e);
            }
        }
    };
</script>