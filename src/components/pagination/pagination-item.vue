<template>
    <li :class="liClasses">
        <a :href="link">
            <icon v-if="iconValue" :value="iconValue"></icon>
            {{label}}
            <slot></slot>
        </a>
    </li>
</template>

<script>
    var classes = require('../../Util.js').classes;

    module.exports = {
        components: {
            icon: require('../icons/icon.vue')
        },

        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: false
            },
            link: {
                type: String,
                default: '#!'
            },
            prev: {
                type: Boolean,
                default: false
            },
            next: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: ''
            },
            wavesEffect: {
                type: Boolean,
                default: true
            }
        },

        data: function() {
            var iconValue = '';
            if(this.prev)
                iconValue = 'chevron_left';

            if(this.next)
                iconValue = 'chevron_right';

            return {
                liClasses: classes({
                    'waves-effect': this.wavesEffect,
                    'disabled': this.disabled,
                    'active': this.active
                }),
                iconValue: iconValue
            };
        }
    };
</script>