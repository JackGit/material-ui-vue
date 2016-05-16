<template>
    <header>
        <navbar logo="Badge" logo-href="#!" side-nav-id="sideNav"></navbar>

        <side-nav id="sideNav" fixed>
            <nav-item active><a href="#!" class="waves-effect waves-teal">Badge</a></nav-item>
            <nav-item><a href="#!" class="waves-effect waves-teal">Breadcrumbs</a></nav-item>
        </side-nav>
    </header>
</template>

<script>
    module.exports = {
        components: {
            'navbar': require('material-ui-vue/components/navbar/navbar.vue'),
            'nav-collapsible-item': require('material-ui-vue/components/navbar/nav-collapsible-item.vue'),
            'nav-dropdown-item': require('material-ui-vue/components/navbar/nav-dropdown-item.vue'),
            'nav-item': require('material-ui-vue/components/navbar/nav-item.vue'),
            'side-nav': require('material-ui-vue/components/side-nav/side-nav.vue'),
            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),
            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue')
        },

        props: {
            componentDetails: {
                type: Object
            }
        }
    };
</script>