<template>
    <collection>
        <collection-item>
            <div>
                Vue
                <a href="#!" class="secondary-content">
                    <icon value="send"></icon>
                </a>
            </div>
        </collection-item>
        <collection-item>React</collection-item>
        <collection-item>Angular</collection-item>
        <collection-item>Meteor</collection-item>
        <collection-item dismissable>This one is dismissable</collection-item>
    </collection>
</template>

<script>
    /**
     * @example basic collection
     * @for collection
     * @description
     */
    module.exports = {
        components: {
            'collection': require('material-ui-vue/components/collections/collection.vue'),
            'collection-item': require('material-ui-vue/components/collections/collection-item.vue'),
            'icon': require('material-ui-vue/components/icons/icon.vue')
        }
    };
</script>