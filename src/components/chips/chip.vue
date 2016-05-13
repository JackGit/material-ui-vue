<template>
    <div class="chip">
        <img v-if="image" :src="image">
        {{label}}
        <icon v-if="removable" value="close"></icon>
    </div>
</template>

<script>
    /**
     * chips
     * @module chips/chip
     * @author Jack Yang
     * @description {@link http://materializecss.com/chips.html Chips} can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.
     */
    module.exports = {
        components: {
            icon: require('../icons/icon.vue')
        },

        props: {
            /**
             * @prop label
             * @type {String}
             * @default ''
             * @description label of the chip
             */
            label: {
                type: String,
                default: ''
            },
            /**
             * @prop removable
             * @type {Boolean}
             * @default false
             * @description indicate this chip is removable or not
             */
            removable: {
                type: Boolean,
                default: false
            },
            /**
             * @prop image
             * @type {String}
             * @default ''
             * @description src of the chip image
             */
            image: {
                type: String,
                default: ''
            }
        }
    };
</script>