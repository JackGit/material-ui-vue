<template>
    <fixed-action-button icon="edit" :active="true">
        <ul>
            <li><btn type="floating" class="red" icon="edit"></btn></li>
            <li><btn type="floating" class="yellow" icon="edit"></btn></li>
            <li><btn type="floating" class="green" icon="edit"></btn></li>
            <li><btn type="floating" class="blue" icon="edit"></btn></li>
        </ul>
    </fixed-action-button>
</template>

<script>
    module.exports = {
        components: {
            'btn': require('material-ui-vue/components/buttons/button.vue'),
            'fixed-action-button': require('material-ui-vue/components/buttons/fixed-action-button.vue')
        }
    };
</script>