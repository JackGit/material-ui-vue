<template>
    <span class="card-title"><slot></slot></span>
</template>

<script>
    module.exports = {
        props: {
            title: {
                type: String
            }
        }
    }
</script>