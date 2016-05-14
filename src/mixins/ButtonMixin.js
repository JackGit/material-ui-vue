var classes = require('../Util.js').classes;

module.exports = {

    components: {
        icon: require('../components/icons/icon.vue')
    },

    props: {
        /**
         * @prop label
         * @type {String}
         * @default ''
         * @description label of this button
         */
        label: {
            type: String,
            default: ''
        },
        /**
         * @prop type
         * @type {String}
         * @default ''
         * @description type of this button. '': raised button, by default. 'flat': flat button. 'floating': floating button
         */
        type: {
            type: String,   // '', flat, floating
            default: ''
        },
        /**
         * @prop large
         * @type {Boolean}
         * @default false
         * @description set this prop as true to let this button has a larger height for buttons that need more attention
         */
        large: {
            type: Boolean,
            default: false
        },
        /**
         * @prop icon
         * @type {String}
         * @default ''
         * @description icon of this button
         */
        icon: {
            type: String,
            default: ''
        },
        /**
         * @prop iconPosition
         * @type {String}
         * @default 'left'
         * @description icon position of the button icon. Possible values: 'left', 'right'
         */
        iconPosition: {
            type: String,
            default: 'left'
        },
        /**
         * @prop wavesEffect
         * @type {Boolean}
         * @default true
         * @description apple the waves effect of the button
         */
        wavesEffect: {
            type: Boolean,
            default: true
        },
        /**
         * @prop lightWave
         * @type {Boolean}
         * @default true
         * @description apply the light-style waves effect to the button
         */
        lightWave: {
            type: Boolean,
            default: true
        },
        /**
         * @prop
         * @type {Boolean}
         * @default false
         * @description indicate the button is disabled or not
         */
        disabled: {
            type: Boolean,
            default: false
        }

    },

    data: function() {
        return {
            buttonClasses: classes({
                'waves-effect': this.wavesEffect,
                'waves-light': this.lightWave,
                'disabled': this.disabled,
                'btn': !this.type,
                'btn-large': this.large,
                'btn-flat': this.type === 'flat',
                'btn-floating': this.type === 'floating'
            })
        };
    }
};