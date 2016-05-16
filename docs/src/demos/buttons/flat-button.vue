<template>
    <div>
        <flat-button type="flat" :light-wave="false" class="waves-red">flat button</flat-button>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'flat-button': require('material-ui-vue/components/buttons/button.vue')
        }
    };
</script>