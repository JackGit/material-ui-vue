var classes = require('../Util.js').classes;

module.exports = {
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
    }
};