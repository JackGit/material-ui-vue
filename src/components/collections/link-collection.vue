<template>
    <div class="collection">
        <a v-for="link in links" :href="link.href" :class="['collection-item', link.active ? 'active' : '']">{{link.label}}</a>
        <slot></slot>
    </div>
</template>

<script>
    /**
     * collection
     * @module collections/link-collection
     * @author Jack Yang
     * @description a component for link collection
     */
    module.exports = {
        props: {
            /**
             * @prop links
             * @type {Array}
             * @default function() {return [];}
             * @description links data for rendering. Example value: [{href: '#!', label: 'Link A', active: true}, {href: '#!', label: 'Link B', active: false}]
             */
            links: {
                type: Array,
                default: function() {return [];}
            }
        },

        ready: function() {
            $(this.$el).find('a').addClass('collection-item');
        }
    }
</script>