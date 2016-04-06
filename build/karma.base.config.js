var webpackConfig = require('./webpack.test.config');
delete webpackConfig.entry;
webpackConfig.devtool = 'inline-source-map';

module.exports = {
    frameworks: ['jasmine'],
    files: [
        '../test/unit/lib/jquery-2.1.1.min.js',
        '../test/unit/specs/index.js',
        {pattern: '../test/unit/lib/materialize-css/css/materialize.min.css', watched: false},
        {pattern: '../test/unit/lib/materialize-css/js/materialize.min.js', watched: false},
        {pattern: '../test/unit/lib/materialize-css/**/*.eot', watched: false, included: false},
        {pattern: '../test/unit/lib/materialize-css/**/*.ttf', watched: false, included: false},
        {pattern: '../test/unit/lib/materialize-css/**/*.woff', watched: false, included: false},
        {pattern: '../test/unit/lib/materialize-css/**/*.woff2', watched: false, included: false}
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