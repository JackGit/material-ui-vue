<template>
    <div class="col s12 m6">
        <card size="small">
            <card-content>
                <card-title>Small Card</card-title>
                <p>This is a small card demo.</p>
            </card-content>
            <card-action>
                <a href="#!">This is a link</a>
            </card-action>
        </card>
        <card size="medium">
            <card-content>
                <card-title>Medium Card</card-title>
                <p>This is a medium card demo.</p>
            </card-content>
            <card-action>
                <a href="#!">This is a link</a>
            </card-action>
        </card>
        <card size="large">
            <card-content>
                <card-title>Large Card</card-title>
                <p>This is a large card demo.</p>
            </card-content>
            <card-action>
                <a href="#!">This is a link</a>
            </card-action>
        </card>
    </div>
</template>

<script>
    /**
     * @example different size of cards
     * @for card
     * @description
     */
    module.exports = {
        components: {
            'card': require('material-ui-vue/components/cards/card.vue'),
            'card-title': require('material-ui-vue/components/cards/card-title.vue'),
            'card-content': require('material-ui-vue/components/cards/card-content.vue'),
            'card-action': require('material-ui-vue/components/cards/card-action.vue')
        }
    };
</script>