<template>
    <collection>
        <collection-item avatar>
            <img :src="imageUrl" alt="" class="circle">
            <span class="title">Title</span>
            <p>First Line <br>
                Second Line
            </p>
            <a href="#!" class="secondary-content"><icon value="grade"></icon></a>
        </collection-item>
        <collection-item avatar>
            <icon value="folder" class="circle"></icon>
            <span class="title">Title</span>
            <p>First Line <br>
                Second Line
            </p>
            <a href="#!" class="secondary-content"><icon value="grade"></icon></a>
        </collection-item>
    </collection>
</template>

<script>
    /**
     * @example avatar collection
     * @for collection
     * @description
     */
    module.exports = {
        components: {
            'collection': require('material-ui-vue/components/collections/collection.vue'),
            'collection-item': require('material-ui-vue/components/collections/collection-item.vue'),
            'icon': require('material-ui-vue/components/icons/icon.vue')
        },

        data: function() {
            return {
                imageUrl: 'http://materializecss.com/images/yuna.jpg'
            }
        }
    };
</script>