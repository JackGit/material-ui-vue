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

    /**
     * pagination item
     * @module pagination/pagination-item
     * @author Jack Yang
     * @description a component for pagination-item
     */
    module.exports = {
        components: {
            icon: require('../icons/icon.vue')
        },

        props: {
            /**
             * @prop disabled
             * @type {Boolean}
             * @default false
             * @description indicate if this pagination is disabled or not
             */
            disabled: {
                type: Boolean,
                default: false
            },
            /**
             * @prop active
             * @type {Boolean}
             * @default false
             * @description indicate the active status of this pagination item
             */
            active: {
                type: Boolean,
                default: false
            },
            /**
             * @prop link
             * @type {String}
             * @default '#!'
             * @description link of this pagination item
             */
            link: {
                type: String,
                default: '#!'
            },
            /**
             * @prop prev
             * @type {Boolean}
             * @default false
             * @description indicate this is the "prev" pagination
             */
            prev: {
                type: Boolean,
                default: false
            },
            /**
             * @prop next
             * @type {Boolean}
             * @default false
             * @description indicate this is the "next" pagination
             */
            next: {
                type: Boolean,
                default: false
            },
            /**
             * @prop label
             * @type {String}
             * @default ''
             * @description label of this pagination item. This value will be ignored when prev or next props is set as true
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop wavesEffect
             * @type {Boolean}
             * @default true
             * @description indicate the pagination with waves effect or not
             */
            wavesEffect: {
                type: Boolean,
                default: true
            }
        },

        data: function() {
            var iconValue = '';

            if(this.prev) {
                iconValue = 'chevron_left';
                this.label = '';
            }

            if(this.next) {
                iconValue = 'chevron_right';
                this.label = '';
            }

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