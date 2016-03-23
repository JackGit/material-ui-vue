<template>
    <div class="collection">
        <a v-for="link in links" :href="link.href" :class="['collection-item', link.active ? 'active' : '']">{{link.label}}</a>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {
        props: {
            links: {
                type: Array, // {href: '', label: '', active: false}
                default: []
            }
        },

        ready: function() {
            $(this.$el).find('a').addClass('collection-item');
        }
    }
</script>