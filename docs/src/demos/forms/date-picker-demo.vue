<template>
    <form>
        <date-picker label="birthday" icon="today" :date="new Date()"></date-picker>
    </form>
</template>

<script>
    /**
     * @example basic date-picker
     * @for date-picker
     * @description
     */
    module.exports = {
        components: {
            'date-picker': require('material-ui-vue/components/forms/date-picker.vue')
        }
    };
</script>