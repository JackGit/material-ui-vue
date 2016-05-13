<template>
    <i :class="['material-icons', size]">{{value}}</i>
</template>

<script>
    /**
     * icons
     * @module icons/icon
     * @author Jack Yang
     * @description We have included 740 Material Design {@link http://materializecss.com/icons.html Icons} courtesy of Google. You can download them directly from the Material Design specs
     */
    module.exports = {
        props: {
            /**
             * @prop value
             * @type {String}
             * @default null
             * @required true
             * @description icon value
             */
            value: {
                type: String,
                required: true
            },
            /**
             * @prop size
             * @type {String}
             * @default ''
             * @description indicate size of the icon. Possible values: 'tiny', 'small', 'medium', 'large' and by default ''
             */
            size: {
                type: String,
                default: ''
            }
        }
    };
</script>