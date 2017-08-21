const webpackConfig = require('../webpack-configs/webpack.config-test');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: 'testsContext.js', watched: false }
    ],
    webpack: Object.assign({}, webpackConfig, {
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react-addons-test-utils': 'react-dom'
      },
      watch: true
    }),
    webpackServer: {
      noInfo: true
    },
    preprocessors: {
      'testsContext.js': ['webpack']
    },
    browsers: ['Chrome']
  });
};
