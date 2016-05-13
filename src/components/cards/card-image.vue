<template>
    <div :class="divClasses">
        <img :src="src" :class="imgClasses">
        <card-title v-if="title" :title="title"></card-title>
        <!-- this slot can be put as styled card title -->
        <slot></slot>
    </div>
</template>

<script>
    /**
     * card image
     * @module cards/card-image
     * @author Jack Yang
     * @description this is a component to create image card
     */
    module.exports = {
        components: {
            'card-title': require('./card-title.vue')
        },

        props: {
            /**
             * @prop src
             * @type {String}
             * @default null
             * @required true
             * @description src of the image
             */
            src: {
                type: String,
                required: true
            },
            /**
             * @prop title
             * @type {String}
             * @default null
             * @description title of the image
             */
            title: {
                type: String
            },
            /**
             * @prop activator
             * @type {Boolean}
             * @default false
             * @description indicate this image is the activator in card reveal
             */
            activator: {
                type: Boolean,
                default: false
            }
        },

        data: function() {
            var divClasses = ['card-image'];
            var imgClasses = [];

            if(this.activator) {
                divClasses.push('waves-effect');
                divClasses.push('waves-block');
                divClasses.push('waves-light');
                imgClasses.push('activator');
            }

            return {
                divClasses: divClasses,
                imgClasses: imgClasses
            }
        }
    };
</script>