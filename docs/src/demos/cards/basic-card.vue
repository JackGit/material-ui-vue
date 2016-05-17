<template>
    <div class="col s12 m6">
        <card class="blue-grey darken-1">
            <card-content>
                <card-title class="red-text">Card Title</card-title>
                <p class="white-text">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </card-content>
            <card-action>
                <a href="#!">This is a link</a>
                <a href="#!">This is a link</a>
            </card-action>
        </card>
    </div>
</template>

<script>
    /**
     * @example basic card
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