<template>
    <div class="col s12 m6">
        <card :revealed="false">
            <card-image :src="imageUrl" activator></card-image>
            <card-content>
                <card-title class="red-text">Card Title</card-title>
            </card-content>
            <card-reveal>
                <card-title class="blue-text">Reveal title</card-title>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </card-reveal>
        </card>
    </div>
</template>

<script>
    /**
     * @example card reveal
     * @for card-reveal
     * @description
     */
    module.exports = {
        components: {
            'card': require('material-ui-vue/components/cards/card.vue'),
            'card-title': require('material-ui-vue/components/cards/card-title.vue'),
            'card-content': require('material-ui-vue/components/cards/card-content.vue'),
            'card-action': require('material-ui-vue/components/cards/card-action.vue'),
            'card-image': require('material-ui-vue/components/cards/card-image.vue'),
            'card-reveal': require('material-ui-vue/components/cards/card-reveal.vue')
        },

        data: function() {
            return {
                imageUrl: 'http://materializecss.com/images/sample-1.jpg'
            }
        }
    };
</script>