<template>
    <div class="col s12 m6">
        <card>
            <card-image :src="imageUrl">
                <card-title>Card Title</card-title>
            </card-image>
            <card-content>
                <p>this is image description</p>
            </card-content>
            <card-action>
                <a href="#!">Link A</a>
            </card-action>
        </card>
    </div>
</template>

<script>
    /**
     * @example card image
     * @for card-image
     * @description
     */
    module.exports = {
        components: {
            'card': require('material-ui-vue/components/cards/card.vue'),
            'card-title': require('material-ui-vue/components/cards/card-title.vue'),
            'card-content': require('material-ui-vue/components/cards/card-content.vue'),
            'card-action': require('material-ui-vue/components/cards/card-action.vue'),
            'card-image': require('material-ui-vue/components/cards/card-image.vue')
        },

        data: function() {
            return {
                imageUrl: 'http://materializecss.com/images/sample-1.jpg'
            }
        }
    };
</script>