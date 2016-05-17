<template>
    <link-collection>
        <a href="#!" class="active">Vue</a>
        <a href="#!">React</a>
        <a href="#!">Angular</a>
    </link-collection>
</template>

<script>
    /**
     * @example link collection with slot
     * @for link-collection
     * @description
     */
    module.exports = {
        components: {
            'link-collection': require('material-ui-vue/components/collections/link-collection.vue')
        }
    };
</script>