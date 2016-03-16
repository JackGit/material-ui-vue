<style>

</style>

<template>
    <div class="row">
        <nav>
            <ul class="right hide-on-med-and-down">
                <li><a href="#!">First Sidebar Link</a></li>
                <li><a href="#!">Second Sidebar Link</a></li>
            </ul>
            <ul id="slide-out" class="side-nav">
                <li><a href="#!">First Sidebar Link</a></li>
                <li><a href="#!">Second Sidebar Link</a></li>
            </ul>
            <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
        </nav>


        <div class="col s7">
            <card size="medium">
                <card-image :src="imageUrl">
                    <card-title>wedding image</card-title>
                </card-image>
                <card-content>
                    <card-title class="red-text" title="123">Title</card-title>
                    <p>this is description</p>
                </card-content>
                <card-action>
                    <a href="#">Link A</a>
                    <a href="#">Link B</a>
                </card-action>
            </card>
        </div>

        <div class="col s7">
            <card :revealed="false">
                <card-image :src="imageUrl" activator></card-image>
                <card-content>
                    <card-title class="red-text" title="123">Title</card-title>
                    <p>this is description</p>
                </card-content>
                <card-reveal>
                    <card-title class="blue-text">reveal title</card-title>
                    <p>Here is some more information about this product that is o</p>
                </card-reveal>
            </card>
        </div>



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
            <collapsible behavior="expandable" popout>
                <li>
                    <collapsible-header active label="first one" icon="edit"></collapsible-header>
                    <collapsible-body><p>test for item 1</p></collapsible-body>
                </li>
                <li>
                    <collapsible-header label="2nd one" icon="edit"></collapsible-header>
                    <collapsible-body>
                        <div class="row">
                            <text-area class="col s12"
                                       label="my text field"
                                       value="this is description"
                                       :validate="true"
                                       :length="10"
                                       error-message="wrong"
                                       @input="handleEvent"
                                       icon="phone"></text-area>
                        </div>
                    </collapsible-body>
                </li>
            </collapsible>
        </div>

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
            'tab': MUI['tab'],
            'collapsible': MUI['collapsible'],
            'collapsible-header': MUI['collapsible-header'],
            'collapsible-body': MUI['collapsible-body'],
            'card': MUI['card'],
            'card-action': MUI['card-action'],
            'card-content': MUI['card-content'],
            'card-image': MUI['card-image'],
            'card-panel': MUI['card-panel'],
            'card-title': MUI['card-title'],
            'card-reveal': MUI['card-reveal']
        },

        data: function() {
            return {
                imageUrl: 'http://wedding.jackyang.me/static/images/wedding_pic_02.jpg'
            }
        },

        methods: {
            handleEvent: function(e) {
                console.log(e.type, e);
            }
        }
    };
</script>