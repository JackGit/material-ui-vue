<template>
    <span :class="classes">{{label}}<slot></slot></span>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * badge
     * @module badges/badge
     * @author Jack Yang
     * @description {@link http://materializecss.com/badges.html Badges} can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the background.
     */
    module.exports = {
        props: {
            /**
             * @prop label
             * @type {String}
             * @default ''
             * @description badge label
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop new
             * @type {Boolean}
             * @default false
             * @description apply the new-style of this badge
             */
            new: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                classes: classes({
                    'badge': true,
                    'new': this.new
                })
            }
        }
    };
</script>