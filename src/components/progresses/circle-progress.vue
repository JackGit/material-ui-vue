<template>
    <div :class="wrapperClasses">
        <div v-for="cl in colors" :class="['spinner-layer', colors.length === 1 ? 'spinner-' + cl + '-only' : 'spinner-' + cl]">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div>
            <div class="gap-patch">
                <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
    var classes = require('../../Util.js').classes;

    /**
     * circle progress
     * @module progresses/circle-progress
     * @author Jack Yang
     * @description Circular {@link http://materializecss.com/preloader.html preloader} in materializecss
     */
    module.exports = {
        props: {
            /**
             * @prop size
             * @type {String}
             * @default ''
             * @description size of the circle. Possible values: 'big', 'small' and by default ''
             */
            size: {
                type: String,
                default: ''
            },
            /**
             * @prop active
             * @type {Boolean}
             * @default true
             * @description indicate the progress is active or not
             */
            active: {
                type: Boolean,
                default: true
            },
            /**
             * @prop color
             * @type {String}
             * @default 'red'
             * @description color or the circle. Possible values: 'red', 'blue', 'yellow' and 'green'
             */
            color: {
                type: String,
                default: 'red'
            },
            /**
             * @prop flash
             * @type {Boolean}
             * @default false
             * @description enable circular flashing colors
             */
            flash: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            return {
                wrapperClasses: classes({
                    'preloader-wrapper': true,
                    'big': this.size === 'big',
                    'small': this.size === 'small',
                    'active': this.active
                }),
                colors: this.flash ? ['blue','red','yellow','green'] : [this.color]
            };
        }
    };
</script>