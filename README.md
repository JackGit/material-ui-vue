[![npm version](https://badge.fury.io/js/material-ui-vue.svg)](https://badge.fury.io/js/material-ui-vue)

>> It's a trial, don't use it, it's unstable

This is a [materializecss.com](http://materializecss.com/) implementation with [Vue.js](http://vuejs.org).

### document ###
[Document](http://jackgit.github.io/material-ui-vue/index.html)

### install ###
```
npm install material-ui-vue --save
npm install vue --save
npm install webpack --saveDev
npm install vue-loader --saveDev
```

### including materialize-css resources in your html ###
Download materialize-css resources from their [official site](http://materializecss.com/) or by npm. Include its css and js files, and jQuery as well, coz materialize.js is jquery based.

index.html:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0 ">
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="materialize-css/css/materialize.min.css"  media="screen,projection"/>
    <title>Material-ui-vue Demo</title>
</head>
<body>
    <app></app>
    <script type="text/javascript" src="http://wedding.jackyang.me/static/javascripts/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="materialize-css/js/materialize.min.js"></script>
    <script type="text/javascript" src="build/bundle.js"></script>
</body>
</html>
```

### write your material-ui-vue components ###

app.vue:
```
<template>
    <div class="row">
        <dropdown label="I am a dropdown" :large="true">
            <ul>
                <li><a href="#!">Inbox<badge>2</badge></a></li>
                <li class="divider"></li>
                <li><a href="#!">Outbox<badge new>2</badge></a></li>
            </ul>
        </dropdown>
    </div>
</template>

<script>
    module.exports = {
        components: {
            'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue'),
            'badge': require('material-ui-vue/components/badges/badge.vue')
        }
    };
</script>
```

### write your main js file to start Vue instance ###

main.js:
```
var Vue = require('vue');

new Vue({
    el: 'body',
    components: {
        app: require('./app.vue')
    }
});
```

### add webpack.config.js ###

webpack.config.js:
```
'use strict';
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        filename: './build/bundle.js',
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'}
        ]
    }
}
```

### build bundle.js ###
```
webpack
```

Now you can test your index.html in browser.

