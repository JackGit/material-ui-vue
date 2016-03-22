var classes = require('../Util.js').classes;

module.exports = {

    components: {
        icon: require('../icons/icon.vue')
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
            type: String
        },
        iconPosition: {
            type: String,
            default: ''
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
                'waves-effect': true,
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