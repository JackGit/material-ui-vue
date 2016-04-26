var webpackConfig = require('./webpack.test.config');
delete webpackConfig.entry;
webpackConfig.devtool = 'inline-source-map';

module.exports = {
    frameworks: ['jasmine'],
    files: [
        '../test/unit/lib/jquery-2.1.1.min.js',
        '../test/unit/lib/materialize-css/js/materialize.js',
        '../test/unit/specs/index.js'
    ],
    preprocessors: {
        '../test/unit/specs/index.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
        noInfo: true
    },
    singleRun: false
};