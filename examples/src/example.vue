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

            'image-chip': require('./components/chips/image-chip.vue'),
            'removable-chip': require('./components/chips/removable-chip.vue'),

            'accordion-collapsible': require('./components/collapsible/accordion-collapsible.vue'),
            'expandable-collapsible': require('./components/collapsible/expandable-collapsible.vue'),
            'popout-collapsible': require('./components/collapsible/popout-collapsible.vue'),

            'basic-collection': require('./components/collections/basic-collection.vue'),
            'header-collection': require('./components/collections/header-collection.vue'),
            'avatar-collection': require('./components/collections/avatar-collection.vue'),
            'link-collection': require('./components/collections/link-collection.vue'),
            'link-collection-with-slot': require('./components/collections/link-collection-with-slot.vue'),
        }
    };
</script>