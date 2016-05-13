<template>
    <li :class="liClasses"><slot></slot></li>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * collection item
     * @module collections/collection-item
     * @author Jack Yang
     * @description a component for collection-item
     */
    module.exports = {
        props: {
            avatar: {
                type: Boolean,
                default: false
            },
            dismissable: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                liClasses: classes({
                    'collection-item': true,
                    'avatar': this.avatar,
                    'dismissable': this.dismissable
                })
            }
        }
    };
</script>