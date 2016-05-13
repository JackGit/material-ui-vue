<template>
    <div class="{{containerClasses}}">
        <div class="{{barClasses}}" :style="{width: percentage + '%'}"></div>
    </div>
</template>

<script>
    /**
     * linear progress
     * @module progresses/linear-progress
     * @author Jack Yang
     * @description Linear {@link http://materializecss.com/preloader.html preloader} in materializecss
     */
    module.exports = {
        props: {
            /**
             * @prop determinate
             * @type {Boolean}
             * @default false
             * @description indicate this is a determinate progress or not
             */
            determinate: {
                type: Boolean,
                default: false
            },
            /**
             * @prop percentage
             * @type {Number}
             * @default 0
             * @description this value used in a determinate progress
             */
            percentage: {
                default: 0
            },
            /**
             * @prop color
             * @type {String}
             * @default ''
             * @description set the front color. {@link http://materializecss.com/color.html Possible values}. Example: color="red"
             */
            color: {
                type: String,
                default: ''
            },
            /**
             * @prop backgroundColor
             * @type {String}
             * @default ''
             * @description set the background color. {@link http://materializecss.com/color.html Possible values}. Example: background-color="red lighten-4"
             */
            backgroundColor: {
                type: String,
                default: ''
            }
        },

        data: function() {
            return {
                containerClasses: 'progress ' + this.backgroundColor,
                barClasses: (this.determinate ? 'determinate' : 'indeterminate') + ' ' + this.color
            }
        }
    }
</script>