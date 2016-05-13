<template>
    <li :class="['tab', disabled ? 'disabled' : '']">
        <a :class="active ? 'active' : ''" :href="'#' + tabId">{{label}}</a>
        <div :id="tabId">
            <slot></slot>
        </div>
    </li>
</template>

<script>
    var uuid = require('uuid');

    /**
     * tab
     * @module tabs/tab
     * @author Jack Yang
     * @description single tab component
     */
    module.exports = {
        props: {
            /**
             * @prop label
             * @type {String}
             * @default ''
             * @description label of this tab
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop active
             * @type {Boolean}
             * @default false
             * @description indicate this tab is active or not
             */
            active: {
                type: Boolean,
                default: false
            },
            /**
             * @prop disabled
             * @type {Boolean}
             * @default false
             * @description indicate this tab is disabled or not
             */
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                tabId: 'tab-' + uuid.v1()
            }
        },

        ready: function() {
            $(this.$el).on('click', function(e) {
                 this.$dispatch('tab-' + e.type, e);
            }.bind(this));
        }
    };
</script>