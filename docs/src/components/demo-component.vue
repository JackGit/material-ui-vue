<template>
    <component :is="demo"></component>
</template>

<script>
    module.exports = {
        props: {
            demo: {
                type: String,
                required: true
            }
        },

        components: {
            '': require('')
        }
    };
</script>