var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var App = require('./app.vue');
var router = new VueRouter();


router.map({
    '/index': {
        name: 'index',
        component: require('./index/index.vue')
    },
    '/about': {
        name: 'about',
        component: require('./about/about.vue')
    },
    '/components/badges': {
        name: 'badges',
        component: require('./components/example.vue')
    }
});

router.redirect({
    '/': '/index'
});


router.start(App, '#app');