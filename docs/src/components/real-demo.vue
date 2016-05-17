<template>
    <div class="row">
        <div class="col s12">
            <component :is="demoName"></component>
        </div>
    </div>
</template>
<script>

    module.exports = {
        props: {
            demoName: {
                type: String,
                required: true,
                default: ''
            }
        },

        components: {
            'badges-in-dropdown': require('../demos/badges/badges-in-dropdown.vue'),
            'badges-in-dropdown-with-slot': require('../demos/badges/badges-in-dropdown-with-slot.vue'),
            'badges-in-collections': require('../demos/badges/badges-in-collections.vue'),
            'badges-in-collections-with-slot': require('../demos/badges/badges-in-collections-with-slot.vue'),
            'badges-in-navbar': require('../demos/badges/badges-in-navbar.vue'),

            'breadcrumbs': require('../demos/breadcrumbs/breadcrumbs.vue'),
            'breadcrumbs-with-slot': require('../demos/breadcrumbs/breadcrumbs-with-slot.vue'),

            'raised-button': require('../demos/buttons/raised-button.vue'),
            'flat-button': require('../demos/buttons/flat-button.vue'),
            'float-button': require('../demos/buttons/float-button.vue'),
            'click-only-fab': require('../demos/buttons/click-only-fab.vue'),
            'horizontal-fab': require('../demos/buttons/horizontal-fab.vue'),
            'vertical-fab': require('../demos/buttons/vertical-fab.vue'),

            'basic-card': require('../demos/cards/basic-card.vue'),
            'card-panel': require('../demos/cards/card-panel.vue'),
            'card-size': require('../demos/cards/card-size.vue'),
            'image-card': require('../demos/cards/image-card.vue'),
            'card-reveal': require('../demos/cards/card-reveal.vue'),

            'image-chip': require('../demos/chips/image-chip.vue'),
            'removable-chip': require('../demos/chips/removable-chip.vue'),

            'accordion-collapsible': require('../demos/collapsible/accordion-collapsible.vue'),
            'expandable-collapsible': require('../demos/collapsible/expandable-collapsible.vue'),
            'popout-collapsible': require('../demos/collapsible/popout-collapsible.vue'),

            'basic-collection': require('../demos/collections/basic-collection.vue'),
            'header-collection': require('../demos/collections/header-collection.vue'),
            'avatar-collection': require('../demos/collections/avatar-collection.vue'),
            'link-collection': require('../demos/collections/link-collection.vue'),
            'link-collection-with-slot': require('../demos/collections/link-collection-with-slot.vue'),

            'dropdown': require('../demos/dropdown/dropdown.vue'),
            'dropdown-with-slot': require('../demos/dropdown/dropdown-with-slot.vue'),
            'icon-large-dropdown': require('../demos/dropdown/icon-large-dropdown.vue'),
            'click-dropdown': require('../demos/dropdown/click-dropdown.vue'),

            'footer-demo': require('../demos/footer/footer-demo.vue'),

            'icon': require('../demos/icons/icon.vue'),

            'text-field-demo': require('../demos/forms/text-field-demo.vue'),
            'text-area-demo': require('../demos/forms/text-area-demo.vue'),
            'switch-demo': require('../demos/forms/switch-demo.vue'),
            'radio-demo': require('../demos/forms/radio-demo.vue'),
            'checkbox-demo': require('../demos/forms/checkbox-demo.vue'),
            'range-demo': require('../demos/forms/range-demo.vue'),
            'date-picker-demo': require('../demos/forms/date-picker-demo.vue'),
            'select-field-demo': require('../demos/forms/select-field-demo.vue'),

            'modal-demo': require('../demos/modals/modal-demo.vue'),

            'tabs-demo': require('../demos/tabs/tabs-demo.vue'),

            'pagination-demo': require('../demos/pagination/pagination-demo.vue'),

            'navbar-demo': require('../demos/navbar/navbar-demo.vue'),
            'search-bar-demo': require('../demos/navbar/search-bar-demo.vue'),
            'side-nav-demo': require('../demos/side-nav/side-nav-demo.vue'),

            'linear-progress-demo': require('../demos/progresses/linear-progress-demo.vue'),
            'circle-progress-demo': require('../demos/progresses/circle-progress-demo.vue')
        }
    };
</script>