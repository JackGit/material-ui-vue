<style>

</style>

<template>
    <i :class="classes.concat('material-icons')">{{key}}</i>
</template>

<script>
    module.exports = {
        props: {
            key: {
                type: String,
                required: true
            },
            classes: {
                type: Array,
                default: []
            }
        }
    };
</script>