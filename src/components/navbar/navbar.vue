<template>
    <div :class="[fixed ? 'navbar-fixed' : '']">
        <nav>
            <div class="nav-wrapper">
                <a :href="logoHref" :class="['brand-logo', logoPosition]">{{logo}}</a>
                <ul :class="[autoHide ? 'hide-on-med-and-down' : '', linkPosition]">
                    <slot></slot>
                </ul>
                <a v-if="sideNavId" v-el:button-collapse href="#!" :data-activates="sideNavId" :class="collapseButtonClasses">
                    <icon value="menu"></icon>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * navbar
     * @module navbar/navbar
     * @author Jack Yang
     * @description The {@link http://materializecss.com/navbar.html navbar} is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right
     */
    module.exports = {
        components: {
            icon: require('../icons/icon.vue')
        },

        props: {
            /**
             * @prop linkPosition
             * @type {String}
             * @default 'right'
             * @description to indicate the position of links in the navbar. Possible values: 'left' and 'right'
             */
            linkPosition: {
                type: String,
                default: 'right'
            },
            /**
             * @prop logo
             * @type {String}
             * @default ''
             * @description logo text value
             */
            logo: {
                type: String,
                default: ''
            },
            /**
             * @prop logoHref
             * @type {String}
             * @default '#!'
             * @description href of logo
             */
            logoHref: {
                type: String,
                default: '#!'
            },
            /**
             * @prop logoPosition
             * @type {String}
             * @default 'left'
             * @description position of logo. Possible values: 'left', 'right', 'center' and by default ''
             */
            logoPosition: {
                type: String,
                default: ''
            },
            /**
             * @prop fixed
             * @type {Boolean}
             * @default false
             * @description indicate this is a fixed navbar
             */
            fixed: {
                type: Boolean,
                default: false
            },
            /**
             * @prop autoHide
             * @type {Boolean}
             * @default true
             * @description add hide-on-med-and-down
             */
            autoHide: {
                type: Boolean,
                default: true
            },
            /**
             * @prop sideNavId
             * @type {String}
             * @default ''
             * @description
             */
            sideNavId: {
                type: String,
                default: ''
            },
            /*
            menuWidth: {
                type: Number,
                default: 240
            },
            /*
            edge: {
                type: String,
                default: 'left'
            },
            closeOnClick: {
                type: Boolean,
                default: false
            },*/
            /**
             * @prop showOnLarge
             * @type {Boolean}
             * @default false
             * @description to control collapse button show on large screen
             */
            showOnLarge: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                collapseButtonClasses: classes({
                    'button-collapse': true,
                    'show-on-large': this.showOnLarge
                })
            }
        },

        ready: function() {
            if(this.sideNavId)
                $(this.$els.buttonCollapse).sideNav();
        }
    };
</script>