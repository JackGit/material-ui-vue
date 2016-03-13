<style>

</style>

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

    module.exports = {
        props: {
            label: {
                type: String
            },
            active: {
                type: Boolean,
                default: false
            },
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
        },

        methods: {

        }
    };
</script>