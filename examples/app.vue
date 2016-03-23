<style>

</style>

<template>
    <div class="row">

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
            <breadcrumbs :crumbs="crumbs"></breadcrumbs>
            <breadcrumbs>
                <a href="#!">a in slot</a>
                <a href="#!">a2 in slot</a>
                <a href="#!">a3 in slot</a>
            </breadcrumbs>
        </div>

        <div class="row">
            <chip label="Tag"></chip>
            <chip label="Tag" removable :image="imageUrl"></chip>
        </div>

        <div class="row">
            <link-collection>
                <a href="#" class="active">active</a>
                <a href="#">link</a>
            </link-collection>
            <link-collection :links="links"></link-collection>
        </div>

        <div class="row">
            <collection with-header>
                <collection-header><h4>header</h4></collection-header>
                <collection-item>Jack Yang</collection-item>
                <collection-item dismissable>Tom J</collection-item>
                <collection-item>
                    <div>
                        Alvin
                        <a href="#!" class="secondary-content">
                            <icon value="send"></icon>
                        </a>
                    </div>
                </collection-item>
            </collection>
        </div>

        <div class="row">
            <collection>
                <collection-item avatar>
                    <img :src="imageUrl" alt="" class="circle">
                    <span class="title">Title</span>
                    <p>First Line <br>
                        Second Line
                    </p>
                    <a href="#!" class="secondary-content"><icon value="grade"></icon></a>
                </collection-item>
            </collection>
        </div>

        <div class="row">
            <search-bar placeholder="search str"></search-bar>
        </div>

        <div class="row">
            <navbar logo="Material UI with Vue" logo-href="//wedding.jackyang.me" side-nav-id="sideNav" show-on-large>
                <nav-item><icon value="more_vert"></icon></nav-item>
                <nav-item><a href="#">Sass</a></nav-item>
                <nav-item><a href="#">Sass</a></nav-item>
                <nav-item><btn label="button"></btn></nav-item>
                <nav-dropdown-item label="I am a dropdown" :items="dropdownItems" active></nav-dropdown-item>
                <nav-dropdown-item label="I am a dropdown 2">
                    <ul>
                        <li><a href="#!">223</a></li>
                        <li class="divider"></li>
                        <li><a href="#!">224</a></li>
                    </ul>
                </nav-dropdown-item>
            </navbar>
        </div>

        <div class="row">
            <side-nav id="sideNav">
                <nav-item active><a href="#" class="waves-effect waves-teal">Link 1</a></nav-item>
                <nav-item><a href="#"  class="waves-effect waves-teal">Link 2</a></nav-item>
                <nav-collapsible-item>
                    <collapsible-header label="dropdown menu" icon="arrow_drop_down" icon-position="right"></collapsible-header>
                    <collapsible-body>
                        <ul>
                            <nav-item><a href="#">Link 1</a></nav-item>
                            <nav-item><a href="#">Link 2</a></nav-item>
                        </ul>
                    </collapsible-body>
                </nav-collapsible-item>
            </side-nav>
        </div>

        <div class="row">
            <btn label="tooltipped button" icon="edit" icon-position="left" @click="clickButton" v-tooltip="{position:'top',text:'i am tooltip'}"></btn>
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
                <collapsible-item>
                    <collapsible-header active label="first one" icon="edit"></collapsible-header>
                    <collapsible-body><p>test for item 1</p></collapsible-body>
                </collapsible-item>
                <collapsible-item>
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
                </collapsible-item>
            </collapsible>
        </div>

        <div class="row">
            <linear-progress color="red" background-color="red lighten-4"></linear-progress>
            <linear-progress determinate percentage="70"></linear-progress>
            <circle-progress color="green"></circle-progress>
            <circle-progress flash size="big"></circle-progress>
            <pagination>
                <pagination-item prev disabled></pagination-item>
                <pagination-item active>1</pagination-item>
                <pagination-item>2</pagination-item>
                <pagination-item>3</pagination-item>
                <pagination-item next></pagination-item>
            </pagination>
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
    var MUI = require('../src/components/index.js');


    module.exports = {
        components: {
            'icon': MUI['icon'],
            'text-field': MUI['text-field'],
            'text-area': MUI['text-area'],
            'select-field': MUI['select-field'],
            'tabs': MUI['tabs'],
            'tab': MUI['tab'],
            'collapsible': MUI['collapsible'],
            'collapsible-item': MUI['collapsible-item'],
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
            'badge': MUI['badge'],
            'breadcrumbs': MUI['breadcrumbs'],
            'chip': MUI['chip'],
            'link-collection': MUI['link-collection'],
            'collection': MUI['collection'],
            'collection-header': MUI['collection-header'],
            'collection-item': MUI['collection-item'],
            'search-bar': MUI['search-bar'],
            'navbar': MUI['navbar'],
            'nav-item': MUI['nav-item'],
            'nav-dropdown-item': MUI['nav-dropdown-item'],
            'nav-collapsible-item': MUI['nav-collapsible-item'],
            'side-nav': MUI['side-nav'],
            'pagination': MUI['pagination'],
            'pagination-item': MUI['pagination-item'],
            'linear-progress': MUI['linear-progress'],
            'circle-progress': MUI['circle-progress'],
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
                ],
                crumbs: [{href: '#', label: 'c1'}, {href: '#', label: 'c2'}],
                links: [{href:'#',label:'active link',active:true},{href:'#',label:'link'}]
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