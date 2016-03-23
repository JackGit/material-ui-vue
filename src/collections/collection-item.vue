<template>
    <li :class="liClasses"><slot></slot></li>
</template>

<script>
    var classes = require('../Util.js').classes;

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