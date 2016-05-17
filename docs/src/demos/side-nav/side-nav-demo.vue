<template>
    <div class="row">
        <side-nav fixed>
            <nav-item><a href="#!" class="waves-effect waves-teal">Link 1</a></nav-item>
            <nav-item><a href="#!" class="waves-effect waves-teal">Link 2</a></nav-item>
            <nav-collapsible-item>
                <collapsible-header label="dropdown menu" icon="arrow_drop_down" icon-position="right"></collapsible-header>
                <collapsible-body>
                    <ul>
                        <nav-item><a href="#!">Link 3</a></nav-item>
                        <nav-item><a href="#!">Link 4</a></nav-item>
                    </ul>
                </collapsible-body>
            </nav-collapsible-item>
        </side-nav>
    </div>
</template>

<script>
    /**
     * @example side-nav demo
     * @for side-nav
     * @description
     */
    module.exports = {
        components: {
            'side-nav': require('material-ui-vue/components/side-nav/side-nav.vue'),
            'nav-collapsible-item': require('material-ui-vue/components/navbar/nav-collapsible-item.vue'),
            'nav-dropdown-item': require('material-ui-vue/components/navbar/nav-dropdown-item.vue'),
            'nav-item': require('material-ui-vue/components/navbar/nav-item.vue'),
            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),
            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue')
        }
    };
</script>