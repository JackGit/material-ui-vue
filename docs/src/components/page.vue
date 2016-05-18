<template>
    <div>
        <page-header></page-header>
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'page-header': require('./page-header.vue'),
            'page-footer': require('./page-footer.vue')
        }
    };
</script>