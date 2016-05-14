<template>
    <div class="row">
        <component :is="example"></component>
    </div>
</template>
<script>

    module.exports = {
        props: {
            example: {
                type: String,
                required: true,
                default: ''
            }
        },

        components: {
            'badges-in-dropdown': require('./components/badges/badges-in-dropdown.vue'),
            'badges-in-dropdown-with-slot': require('./components/badges/badges-in-dropdown-with-slot.vue'),
            'badges-in-collections': require('./components/badges/badges-in-collections.vue'),
            'badges-in-collections-with-slot': require('./components/badges/badges-in-collections-with-slot.vue'),

            'breadcrumbs': require('./components/breadcrumbs/breadcrumbs.vue'),
            'breadcrumbs-with-slot': require('./components/breadcrumbs/breadcrumbs-with-slot.vue'),

            'raised-button': require('./components/buttons/raised-button.vue'),
            'flat-button': require('./components/buttons/flat-button.vue'),
            'float-button': require('./components/buttons/float-button.vue'),
            'click-only-fab': require('./components/buttons/click-only-fab.vue'),
            'horizontal-fab': require('./components/buttons/horizontal-fab.vue'),
            'vertical-fab': require('./components/buttons/vertical-fab.vue'),

            'basic-card': require('./components/cards/basic-card.vue'),
            'card-panel': require('./components/cards/card-panel.vue'),
            'card-size': require('./components/cards/card-size.vue'),
            'image-card': require('./components/cards/image-card.vue'),
            'card-reveal': require('./components/cards/card-reveal.vue'),
        }
    };
</script>