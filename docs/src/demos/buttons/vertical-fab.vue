<template>
    <div style="position: relative">
        <fixed-action-button icon="edit" :active="true" style="position: absolute; display: inline-block; right: 24px;">
            <ul>
                <li><btn type="floating" class="red" icon="edit"></btn></li>
                <li><btn type="floating" class="yellow" icon="edit"></btn></li>
                <li><btn type="floating" class="green" icon="edit"></btn></li>
                <li><btn type="floating" class="blue" icon="edit"></btn></li>
            </ul>
        </fixed-action-button>
    </div>
</template>

<script>
    /**
     * @example vertical FAB
     * @for fixed-action-button
     * @description
     */
    module.exports = {
        components: {
            'btn': require('material-ui-vue/components/buttons/button.vue'),
            'fixed-action-button': require('material-ui-vue/components/buttons/fixed-action-button.vue')
        }
    };
</script>