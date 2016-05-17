<template>
    <div class="row">
        <search-bar placeholder="search..."></search-bar>
    </div>
</template>

<script>
    /**
     * @example search-bar demo
     * @for search-bar
     * @description
     */
    module.exports = {
        components: {
            'search-bar': require('material-ui-vue/components/navbar/search-bar.vue')
        }
    };
</script>