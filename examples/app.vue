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

        <div class="row">
            <dropdown label="I am a dropdown" :items="dropdownItems" disabled></dropdown>
            <dropdown label="I am a dropdown 2" icon="edit" icon-position="right" :large="true">
                <ul>
                    <li><a href="#!">223<badge>2</badge></a></li>
                    <li class="divider"></li>
                    <li><a href="#!">224<badge new>2</badge></a></li>
                </ul>
            </dropdown>
        </div>

        <div class="row">
            <btn label="test button" icon="edit" icon-position="left" @click="clickButton"></btn>
            <btn label="large button" :large="true" icon="edit" icon-position="left" @click="clickButton"></btn>
            <btn class='waves-teal' label="flat button" type="flat" icon="edit" icon-position="right"></btn>
            <btn type="floating" icon="add"></btn>
            <btn type="floating" :large="true" :light-wave="false" icon="edit" class="red"></btn>
        </div>

        <div class="row">
            <fixed-action-button icon="edit" :horizontal="true" :click-only="true" :active="true">
                <ul>
                    <li><btn type="floating" class="red" icon="edit"></btn></li>
                    <li><btn type="floating" class="yellow" icon="edit"></btn></li>
                    <li><btn type="floating" class="green" icon="edit"></btn></li>
                    <li><btn type="floating" class="blue" icon="edit"></btn></li>
                </ul>
            </fixed-action-button>
        </div>

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
                    class="col s12"
                    label="select field"
                    :options="options"></select-field>
        </div>

        <icon class="red-text" value="add" @click="changeOptions"></icon>

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
            'card-reveal': MUI['card-reveal'],
            'dropdown': MUI['dropdown'],
            'btn': MUI['button'],
            'fixed-action-button': MUI['fixed-action-button'],
            'badge': MUI['badge']
        },

        data: function() {
            return {
                imageUrl: 'http://wedding.jackyang.me/static/images/wedding_pic_02.jpg',
                options: [
                    {value: '0', text: 'zero', disabled: false, selected: false},
                    {value: '1', text: 'one', disabled: false, selected: true},
                    {value: '2', text: 'two', disabled: false, selected: false},
                    {value: '3', text: 'three', disabled: false, selected: false}],
                dropdownItems: [
                    {href: '#', text: '123'},
                    {href: '#', text: '223'},
                    {href: '#', text: '323'},
                    {divider: true},
                    {href: '#', text: '423'},
                ]
            }
        },

        methods: {
            handleEvent: function(e) {
                console.log(e.type, e);
            },
            changeOptions: (function() {
                var i = 0;

                return function() {

                    this.options.forEach(function(o) {
                        if(o.value == i)
                            o.selected = true;
                        else
                            o.selected = false;
                    });
                    i = (i+1) % 4;
                }
            })(),
            clickButton: function() {
                alert('button clicked');
            }
        }
    };
</script>