<template>
    <component is="current"></component>
</template>

<script>
    module.exports = {
        props: {

        },

        components: {
            '': function(resolve) {
                require([''], resolve);
            }
        }
    };
</script>