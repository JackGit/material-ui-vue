<template>
    <div :class="divClasses">
        <btn type="floating" :large="true" :icon="icon" :light-wave="lightWave" :disabled="disabled"></btn>
        <slot></slot>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;
    var ButtonMixin = require('../../mixins/ButtonMixin.js');

    /**
     * fixed action button
     * @module buttons/fixed-action-button
     * @author Jack Yang
     * @description If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.
     */
    module.exports = {
        /**
         * @prop label
         * @type {String}
         * @default ''
         * @description label of this button
         */

        /**
         * @prop type
         * @type {String}
         * @default ''
         * @description type of this button. '': raised button, by default. 'flat': flat button. 'floating': floating button
         */

        /**
         * @prop large
         * @type {Boolean}
         * @default false
         * @description set this prop as true to let this button has a larger height for buttons that need more attention
         */

        /**
         * @prop icon
         * @type {String}
         * @default ''
         * @description icon of this button
         */

        /**
         * @prop iconPosition
         * @type {String}
         * @default 'left'
         * @description icon position of the button icon. Possible values: 'left', 'right'
         */

        /**
         * @prop wavesEffect
         * @type {Boolean}
         * @default true
         * @description apple the waves effect of the button
         */

        /**
         * @prop lightWave
         * @type {Boolean}
         * @default true
         * @description apply the light-style waves effect to the button
         */

        /**
         * @prop
         * @type {Boolean}
         * @default false
         * @description indicate the button is disabled or not
         */
        mixins: [ButtonMixin],

        components: {
            'btn': require('./button.vue')
        },

        props: {
            /**
             * @prop horizontal
             * @type {Boolean}
             * @default false
             * @description indicate this is a horizontal FAB
             */
            horizontal: {
                type: Boolean,
                default: false
            },
            /**
             * @prop clickOnly
             * @type {Boolean}
             * @default false
             * @description if you want to disable the hover behaviour, and instead toggle the FAB menu when the user clicks on the large button (works great on mobile!), just add the click-to-toggle class to the FAB
             */
            clickOnly: {
                type: Boolean,
                default: false
            },
            /*
            active: {
                type: Boolean,
                default: false
            }*/
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