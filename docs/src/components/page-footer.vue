<template>
    <mui-footer>
        <div class="container">
            <div class="row">
                <div class="col l8 s12">
                    <h5 class="white-text">Material-ui-vue</h5>
                    <p class="grey-text text-lighten-4">is a <a href="http://vuejs.org/">vue</a> component lib which basically a wrapper of <a href="http://materializecss.com/">materializecss.com</a> work.</p>
                    <p class="grey-text text-lighten-4"><a href="https://nodei.co/npm/material-ui-vue/"><img src="https://nodei.co/npm/material-ui-vue.png?downloads=true"></a></p>
                    <p><iframe src="https://ghbtns.com/github-btn.html?user=jackgit&repo=material-ui-vue&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe></p>
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