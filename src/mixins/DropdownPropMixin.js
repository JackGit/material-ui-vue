module.exports = {
    props: {
        /**
         * @prop items
         * @type {Array}
         * @default function() {return [];}
         * @description example value: [{href: '#!', label: 'item 1', badge: {label: '1', new: true}}, {href: '#!', label: 'item 2'}, {divider: true}]
         */
        items: {
            type: Array,
            default: function() {return [];}
        },
        /**
         * @prop inDuration
         * @type {Number}
         * @default 300
         * @description the duration of the transition enter in milliseconds
         */
        inDuration: {
            type: Number,
            default: 300
        },
        /**
         * @prop outDuration
         * @type {Number}
         * @default 225
         * @description the duration of the transition out in milliseconds
         */
        outDuration: {
            type: Number,
            default: 225
        },
        /**
         * @prop constrainWidth
         * @type {Boolean}
         * @default true
         * @description if true, constrainWidth to the size of the dropdown activator
         */
        constrainWidth: {
            type: Boolean,
            default: true
        },
        /**
         * @prop hover
         * @type {Boolean}
         * @default true
         * @description if true, the dropdown will open on hover
         */
        hover: {
            type: Boolean,
            default: true
        },
        /**
         * @prop gutter
         * @type {Number}
         * @default 0
         * @description this defines the spacing from the aligned edge
         */
        gutter: {
            type: Number,
            default: 0
        },
        /**
         * @prop belowOrigin
         * @type {Boolean}
         * @default false
         * @description if true, the dropdown will show below the activator
         */
        belowOrigin: {
            type: Boolean,
            default: false
        },
        /**
         * @prop alignment
         * @type {String}
         * @default 'left'
         * @description defines the edge the menu is aligned to. Possible values: 'left', 'right'
         */
        alignment: {
            type: String,
            default: 'left'
        }
    }
}