<template>
    <div :class="['card', size]">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * card
     * @module cards/card
     * @author Jack Yang
     * @description {@link http://materializecss.com/cards.html Cards} are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length
     */
    module.exports = {
        props: {
            /**
             * @prop size
             * @type {String}
             * @default ''
             * @description if you want to have uniformly sized cards, you can use our premade size classes. Just add the size class in addition to the card class. Possible values: 'small', 'medium', 'large', and by default ''
             */
            size: {
                type: String,
                default: ''   // 'small', 'medium', 'large'
            },
            /**
             * @prop revealed
             * @type {Boolean}
             * @default false
             * @description indicate the status for card reveal
             */
            revealed: {
                type: Boolean,
                default: false
            }
        },

        ready: function() {
            if(this.revealed)
                setTimeout(function() {
                    $(this.$el).find('.activator').trigger('click');
                }.bind(this), 10);
        }
    };
</script>