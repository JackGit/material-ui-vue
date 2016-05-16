
'use strict';
var webpack = require('webpack');

module.exports = {
    entry: '../src/app.js',
    output: {
        filename: '../dist/bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}