<template>
    <nav>
        <div class="nav-wrapper">
            <div class="col s12">
                <a v-for="crumb in crumbs" :href="crumb.href" class="breadcrumb">{{crumb.label}}</a>
                <slot></slot>
            </div>
        </div>
    </nav>
</template>

<script>
    /**
     * breadcrumbs
     * @module breadcrumbs/breadcrumbs
     * @author Jack Yang
     * @description {@link http://materializecss.com/breadcrumbs.html Breadcrumbs} are a good way to display your current location. This is usually used when you have multiple layers of content.
     */
    module.exports = {
        props: {
            /**
             * @prop crumbs
             * @type {Array}
             * @default function() {return [];}
             * @description example value: [{href: '#!', label: 'First'}, {href: '#!', label: 'Second'}, {href: '#!', label: 'Third'}]
             */
            crumbs: {
                type: Array,
                default: function() {return [];}
            }
        },

        ready: function() {
            $(this.$el).find('a').addClass('breadcrumb');
        }
    };
</script>