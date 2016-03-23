module.exports = {
    props: {
        items: {
            type: Array,
            default: function() {return [];}
        },
        inDuration: {
            type: Number,
            default: 300
        },
        outDuration: {
            type: Number,
            default: 225
        },
        constrainWidth: {
            type: Boolean,
            default: true
        },
        hover: {
            type: Boolean,
            default: true
        },
        gutter: {
            type: Number,
            default: 0
        },
        belowOrigin: {
            type: Boolean,
            default: false
        },
        alignment: {
            type: String,
            default: 'left'
        }
    }
}