
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
            //{test: /\.css$/, loader: 'style!css!'},
            //
            // {test: /\.(png|jpg)$/, loader: 'file'},
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