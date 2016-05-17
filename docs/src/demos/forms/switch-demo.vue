<template>
    <div class="row">
        <switch right-label="on" left-label="off" :value="true"></switch>
    </div>
    <div class="row">
        <switch right-label="on" left-label="off" :value="false" disabled></switch>
    </div>
</template>

<script>
    /**
     * @example switch demos
     * @for switch
     * @description
     */
    module.exports = {
        components: {
            'switch': require('material-ui-vue/components/forms/switch.vue')
        }
    };
</script>