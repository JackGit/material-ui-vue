<template>
    <span class="card-title"><slot></slot></span>
</template>

<script>
    /**
     * card title
     * @module cards/card-title
     * @author Jack Yang
     * @description a component for card-title
     */
    module.exports = {
        props: {
            /**
             * @prop title
             * @type {String}
             * @default null
             * @description title of the card
             */
            title: {
                type: String
            }
        }
    }
</script>