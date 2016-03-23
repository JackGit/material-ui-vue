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
    module.exports = {
        props: {
            crumbs: {
                type: Array,    // {href:'', label:''}
                default: function() {return [];}
            }
        },

        ready: function() {
            $(this.$el).find('a').addClass('breadcrumb');
        }
    };
</script>