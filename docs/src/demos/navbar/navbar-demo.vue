<template>
    <div class="row">
        <navbar logo="Navbar" logo-href="#!">
            <nav-item><a href="#!"><icon value="refresh"></icon></a></nav-item>
            <nav-item active><a href="#!">Vue</a></nav-item>
            <nav-item><a href="#!">React</a></nav-item>
            <nav-item><a href="#!">Angular</a></nav-item>
            <nav-item><btn label="button"></btn></nav-item>
        </navbar>
        <navbar logo="Centering Logo Navbar" logo-href="#!" logo-position="center" link-position="left">
            <nav-item active><a href="#!">Vue</a></nav-item>
            <nav-item><a href="#!">React</a></nav-item>
            <nav-item><a href="#!">Angular</a></nav-item>
        </navbar>
        <navbar logo="Navbar with dropdown" logo-href="#!">
            <nav-item active><a href="#!">Vue</a></nav-item>
            <nav-item><a href="#!">React</a></nav-item>
            <nav-item><a href="#!">Angular</a></nav-item>
            <nav-dropdown-item label="Others 1" :items="dropdownItems"></nav-dropdown-item>
            <nav-dropdown-item label="Others 2">
                <ul>
                    <li><a href="#!">Three</a></li>
                    <li><a href="#!">Four</a></li>
                </ul>
            </nav-dropdown-item>
        </navbar>

        <div>
            <navbar logo="Logo" logo-href="#!" side-nav-id="sideNav">
                <nav-item><a href="#!">Link 1</a></nav-item>
                <nav-item><a href="#!">Link 2</a></nav-item>
                <nav-dropdown-item label="dropdown menu">
                    <ul>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </nav-dropdown-item>
            </navbar>
            <side-nav id="sideNav">
                <nav-item active><a href="#!" class="waves-effect waves-teal">Link 1</a></nav-item>
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
    </div>
</template>

<script>
    /**
     * @example navbar demos
     * @for navbar
     * @description
     */
    module.exports = {
        components: {
            'navbar': require('material-ui-vue/components/navbar/navbar.vue'),
            'nav-item': require('material-ui-vue/components/navbar/nav-item.vue'),
            'nav-collapsible-item': require('material-ui-vue/components/navbar/nav-collapsible-item.vue'),
            'nav-dropdown-item': require('material-ui-vue/components/navbar/nav-dropdown-item.vue'),
            'icon': require('material-ui-vue/components/icons/icon.vue'),
            'btn': require('material-ui-vue/components/buttons/button.vue'),
            'side-nav': require('material-ui-vue/components/side-nav/side-nav.vue'),
            'collapsible-header': require('material-ui-vue/components/collapsible/collapsible-header.vue'),
            'collapsible-body': require('material-ui-vue/components/collapsible/collapsible-body.vue')
        },

        data: function() {
            return {
                dropdownItems: [
                    {href: '#!', label: 'One'},
                    {href: '#!', label: 'Two'},
                    {divider: true},
                    {href: '#!', label: 'Three'},
                ]
            }
        }
    };
</script>