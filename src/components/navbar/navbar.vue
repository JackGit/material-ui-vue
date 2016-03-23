<template>
    <div :class="[fixed ? 'navbar-fixed' : '']">
        <nav>
            <div class="nav-wrapper">
                <a :href="logoHref" :class="['brand-logo', logoPosition]">{{logo}}</a>
                <ul :class="[autoHide ? 'hide-on-med-and-down' : '', linkPosition]">
                    <slot></slot>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    module.exports = {
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
            }
        }
    };
</script>