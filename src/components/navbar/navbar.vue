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

    module.exports = {
        components: {
            icon: require('../icons/icon.vue')
        },

        props: {
            linkPosition: {
                type: String,
                default: 'right'    // left, right
            },
            logo: {
                type: String,
                default: ''
            },
            logoHref: {
                type: String,
                default: '#'
            },
            logoPosition: {
                type: String,
                default: 'left'     // left, right, center
            },
            fixed: {
                type: Boolean,
                default: false
            },
            autoHide: {
                type: Boolean,
                default: true
            },
            sideNavId: {
                type: String,
                default: ''
            },
            menuWidth: {
                type: Number,
                default: 240
            },
            edge: {
                type: String,
                default: 'left'
            },
            closeOnClick: {
                type: Boolean,
                default: false
            },
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