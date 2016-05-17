<template>
    <div class="col s12 m6">
        <card-panel class="teal">
            <span class="white-text">I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            </span>
        </card-panel>
    </div>
</template>

<script>
    /**
     * @example basic card panel
     * @for card-panel
     * @description
     */
    module.exports = {
        components: {
            'card-panel': require('material-ui-vue/components/cards/card-panel.vue')
        }
    };
</script>