<template>
    <div :class="divClasses">
        <btn type="floating" :large="true" :icon="icon" :light-wave="lightWave" :disabled="disabled"></btn>
        <slot></slot>
    </div>
</template>

<script>
    var classes = require('../Util.js').classes;
    var ButtonMixin = require('../mixins/ButtonMixin.js');

    module.exports = {
        mixins: [ButtonMixin],

        components: {
            'btn': require('./button.vue')
        },

        props: {
            horizontal: {
                type: Boolean,
                default: false
            },
            clickOnly: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                divClasses: classes({
                    'fixed-action-btn': true,
                    'horizontal': this.horizontal,
                    'click-to-toggle': this.clickOnly
                })
            };
        },

        /*watch: {
            active: function(value) {
                if(value)
                    this.openFAB();
                else
                    this.closeFAB();
            }
        },*/

        ready: function() {
            if(this.active) {
                // below will give error of $().reverse() is not function ...
                // this.openFAB();
            }

        },

        methods: {
            openFAB: function() {
                $(this.$el).openFAB();
            },
            closeFAB: function() {
                $(this.$el).closeFAB();
            }
        }
    };
</script>