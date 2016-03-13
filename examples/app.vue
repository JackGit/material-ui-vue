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
                    class="col s12"></text-field>

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
                   :validate="true"
                   :length="10"
                   error-message="wrong"
                   @input="handleEvent"
                   icon="phone"></text-area>

        <div class="row">
            <select-field
                    label="select field"
                    :options="options"></select-field>
        </div>

        <icon class="red-text" value="add"></icon>

        <div class="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s3"><a href="#test1">Test 1</a></li>
                    <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
                    <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
                    <li class="tab col s3"><a href="#test4">Test 4</a></li>
                </ul>
            </div>
            <div id="test1" class="col s12">Test 1</div>
            <div id="test2" class="col s12">Test 2</div>
            <div id="test3" class="col s12">Test 3</div>
            <div id="test4" class="col s12">Test 4</div>
        </div>

        <div class="row">
            <ul class="tabs">
                <li class="tab col s3"><a href="#test5">Test 1</a></li>
                <li class="tab col s3"><a class="active" href="#test6">Test 2</a></li>
                <li class="tab col s3 disabled"><a href="#test7">Disabled Tab</a></li>
                <li class="tab col s3"><a href="#test8">Test 4</a></li>
            </ul>
            <div id="test5">Test 1</div>
            <div id="test6">Test 2</div>
            <div id="test7">Test 3</div>
            <div id="test8">Test 4</div>
        </div>

        <div class="row">
            <tabs>
                <tab label="tab1" >
                    this is tab page 1
                </tab>
                <tab label="tab2" disabled>
                    <div class="row">
                        <select-field
                                class="col s12"
                                label="select field"
                                :options="options"></select-field>

                        <text-area class="col s12"
                                   label="my text field"
                                   value="this is description"
                                   :validate="true"
                                   :length="10"
                                   error-message="wrong"
                                   @input="handleEvent"
                                   icon="phone"></text-area>
                    </div>
                </tab>
            </tabs>
        </div>
    </div>


</template>

<script>
    var MUI = require('../src/index.js');


    module.exports = {
        components: {
            'icon': MUI['icon'],
            'text-field': MUI['text-field'],
            'text-area': MUI['text-area'],
            'select-field': MUI['select-field'],
            'tabs': MUI['tabs'],
            'tab': MUI['tab']
        },

        methods: {
            handleEvent: function(e) {
                console.log(e.type, e);
            }
        }
    };
</script>