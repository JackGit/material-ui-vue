<style>

</style>

<template>
    <div>
        <div class="col s12">
            <dropdown :label="label" :items="dropdownItems" disabled></dropdown>
        </div>
        <div class="col s12">
            <dropdown label="I am a dropdown 2" icon="edit" icon-position="right" :large="true">
                <ul>
                    <li><a href="#!">223<badge>2</badge></a></li>
                    <li class="divider"></li>
                    <li><a href="#!">224<badge new>2</badge></a></li>
                </ul>
            </dropdown>
        </div>
        <div class="col s12">
            <breadcrumbs>
                <a href="#!">a in slot</a>
                <a href="#!">a2 in slot</a>
                <a href="#!">a3 in slot</a>
            </breadcrumbs>
        </div>
        <div class="col s12">
            <breadcrumbs :crumbs="crumbs"></breadcrumbs>
        </div>
        <div class="col s12">
            <link-collection :links="links"></link-collection>
        </div>
        <div class="col s12">
            <link-collection>
                <a href="#" class="active">active</a>
                <a href="#">link</a>
            </link-collection>
        </div>
        <div class="col s12">
            <carousel :images="images"></carousel>
        </div>
        <div class="col s12">
            <date-picker :date.sync="date" :opened.sync="openPicker" :picker-options="{selectMonths: true}" label="birthday" class="col s12"></date-picker>
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
            'radio': MUI['radio'],
            'checkbox': MUI['checkbox'],
            'switch': MUI['switch'],
            'range': MUI['range'],
            'date-picker': MUI['date-picker'],
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
            'material-box': MUI['material-box'],
            'modal': MUI['modal'],
            'modal-content': MUI['modal-content'],
            'modal-footer': MUI['modal-footer'],
            'mui-footer': MUI['footer'],
            'footer-copyright': MUI['footer-copyright'],
            'parallax': MUI['parallax'],
            'slider': MUI['slider'],
            'carousel': MUI['carousel']
        },

        data: function() {
            return {
                imageUrl: 'http://wedding.jackyang.me/static/images/wedding_pic_02.jpg',
                options: [
                    {value: '0', text: 'zero', disabled: false, icon: 'http://wedding.jackyang.me/static/images/wedding_pic_02.jpg'},
                    {value: '1', text: 'one', disabled: false, icon: 'http://wedding.jackyang.me/static/images/wedding_pic_02.jpg'},
                    {value: '2', text: 'two', disabled: false, icon: 'http://wedding.jackyang.me/static/images/wedding_pic_02.jpg'},
                    {value: '3', text: 'three', disabled: false, icon: 'http://wedding.jackyang.me/static/images/wedding_pic_02.jpg'}],
                optionSelected: '2',
                groupOptions: {
                    g1: [{value: '0', text: 'zero', disabled: false}, {value: '1', text: 'one', disabled: false}],
                    g2: [{value: '2', text: 'two', disabled: false}, {value: '3', text: 'three', disabled: false}]
                },
                groupOptionSelected: '2',
                dropdownItems: [
                    {href: '#', text: '123'},
                    {href: '#', text: '223'},
                    {href: '#', text: '323'},
                    {divider: true},
                    {href: '#', text: '423'},
                ],
                crumbs: [{href: '#', label: 'c1'}, {href: '#', label: 'c2'}],
                links: [{href:'#',label:'active link',active:true},{href:'#',label:'link'}],
                modalStatus: true,
                label: 'i am a label',
                radioItems: [{label:'RED',value:'red',disabled:false}, {label:'GREEN',value:'green',disabled:true}, {label:'BLUE',value:'blue',disabled:false}, {label:'YELLOW',value:'yellow',disabled:false}],
                radioSelected: 'red',
                checkboxItems: [{label:'RED',value:'red',disabled:false}, {label:'GREEN',value:'green',disabled:true}, {label:'BLUE',value:'blue',disabled:false}, {label:'YELLOW',value:'yellow',disabled:false}],
                checkboxSelected: ['red', 'blue', 'green'],
                switchValue: true,
                rangeValue: 30,
                openPicker: false,
                date: new Date(),
                images: [
                    {url:'http://wedding.jackyang.me/static/images/wedding_pic_01.jpg',caption:'This is our big Tagline!',description:'Here our small slogan.'},
                    {url:'http://wedding.jackyang.me/static/images/wedding_pic_02.jpg',caption:'Left Aligned Caption',description:'Here our small slogan.'},
                    {url:'http://wedding.jackyang.me/static/images/wedding_pic_03.jpg',caption:'Right Aligned Caption',description:'Here our small slogan.',captionPosition:'left'},
                    {url:'http://wedding.jackyang.me/static/images/wedding_pic_04.jpg',caption:'This is our big Tagline!',description:'Here our small slogan.'}
                ]
            }
        },

        watch: {
            radioSelected: function(value) {
                console.log('radioSelected', value);
            },
            checkboxSelected: function(value) {
                console.log('checkboxSelected', value);
            },
            switchValue: function(value) {
                console.log('switchValue', value)
            },
            rangeValue: function(value) {
                console.log('rangeValue', value);
            },
            openPicker: function(value) {
                console.log('openPicker', value);
            },
            date: function(value) {
                console.log('picker date', new Date(value));
            },
            optionSelected: function(value) {
                console.log('optionSelected', value);
            }

        },

        methods: {
            handleEvent: function(e) {
                console.log(e.type, e);
            },
            changeOptions: (function() {
                var i = 0;
                return function() {
                    i = (i+1) % 4;
                    this.optionSelected = '' + i;
                }
            })(),
            clickButton: function() {
                alert('button clicked');
            },
            openModal: function() {
                this.modalStatus = true;
            },
            closeModal: function() {
                this.modalStatus = false;
            },
            confirmModal: function() {
                var value = window.confirm('are your sure to close the modal?');
                this.modalStatus = !value;
            },
            handleTextFieldInput: function(e) {
                console.log('handle text input', e)
                this.label = e.target.value;
            },
            clickRadio: function() {
                console.log('click radio')
            },
            changeCheckbox: function(e) {
                console.log('change checkbox', e)
            },
            changeSwitch: function(e) {
                console.log('change switch', e)
            },
            inputRange: function() {
                console.log('change range value');
            }
        }
    };
</script>