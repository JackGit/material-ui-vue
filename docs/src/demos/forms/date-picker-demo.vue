<template>
    <div class="row">
        <form class="col s12">
            <date-picker label="birthday" icon="today" :date="new Date()"></date-picker>
        </form>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'date-picker': require('material-ui-vue/components/forms/date-picker.vue')
        }
    }
</script>