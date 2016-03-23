var classes = require('../Util.js').classes;

module.exports = {

    components: {
        icon: require('../components/icons/icon.vue')
    },

    props: {
        label: {
            type: String
        },
        type: {
            type: String,   // '', flat, floating
            default: ''
        },
        large: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        iconPosition: {
            type: String,
            default: ''
        },
        wavesEffect: {
            type: Boolean,
            default: true
        },
        lightWave: {
            type: Boolean,
            default: true
        },
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