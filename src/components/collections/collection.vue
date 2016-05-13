<template>
    <ul :class="ulClasses">
        <slot></slot>
    </ul>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * collection
     * @module collections/collection
     * @author Jack Yang
     * @description {@link http://materializecss.com/collections.html Collections} allow you to group list objects together.
     */
    module.exports = {
        props: {
            /**
             * @prop withHeader
             * @type {Boolean}
             * @default false
             * @description to indicate the collection with header or not
             */
            withHeader: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                ulClasses: classes({
                    'collection': true,
                    'with-header': this.withHeader
                })
            }
        }
    };
</script>