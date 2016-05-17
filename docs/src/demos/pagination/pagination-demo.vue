<template>
    <div class="row">
        <pagination>
            <pagination-item prev disabled></pagination-item>
            <pagination-item v-for="page in pages"
                             :active="page == current"
                             @click="setCurrent(page)">
                {{page}}
            </pagination-item>
            <pagination-item next></pagination-item>
        </pagination>
    </div>
</template>

<script>
    /**
     * @example pagination demo
     * @for pagination
     * @description
     */
    module.exports = {
        components: {
            'pagination': require('material-ui-vue/components/pagination/pagination.vue'),
            'pagination-item': require('material-ui-vue/components/pagination/pagination-item.vue')
        },

        data: function() {
            return {
                pages: [1,2,3],
                current: 1
            }
        },

        methods: {
            setCurrent: function(pageIndex) {
                this.current = pageIndex;
            }
        }
    };
</script>