<template>
    <i class="material-icons">{{value}}</i>
</template>

<script>
    module.exports = {
        props: {
            value: {
                type: String,
                required: true
            }
        }
    };
</script>