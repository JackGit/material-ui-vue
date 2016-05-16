<template>
    <mui-footer>
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Material-ui-vue</h5>
                    <p class="grey-text text-lighten-4">is a <a href="http://vuejs.org/">vue</a> component lib which basically a wrapper of <a href="http://materializecss.com/">materializecss.com</a> work.</p>
                    <p class="grey-text text-lighten-4">You can install it by: <code class="language-markup">npm install material-ui-vue</code></p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="https://www.npmjs.com/package/material-ui-vue">npm</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://github.com/JackGit/material-ui-vue">github</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <footer-copyright>
            <div class="container">
                © 2016 material-ui-vue, All rights reserved.
            </div>
        </footer-copyright>
    </mui-footer>
</template>

<script>
    module.exports = {
        components: {
            'mui-footer': require('material-ui-vue/components/footer/footer.vue'),
            'footer-copyright': require('material-ui-vue/components/footer/footer-copyright.vue')
        }
    }
</script>