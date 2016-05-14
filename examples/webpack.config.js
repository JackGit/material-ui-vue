
'use strict';
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './src/bundle.js',
    },
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