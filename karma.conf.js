const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({

    // Add any browsers here
    // browsers: ['Chrome'],
    browsers: ['Firefox', 'FirefoxDeveloper', 'FirefoxAurora', 'FirefoxNightly', 'ChromeNoSandbox'],

    customLaunchers: {
      ChromeNoSandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    frameworks: ['jasmine'],

    // The entry point for our test suite
    basePath: '',
    autoWatch: false,
    files: [
      {
        pattern: './webpack.tests.js',
        watched: false,
        served: true,
        included: true
      }
    ],
    preprocessors: {
      // Run this through webpack, and enable inline sourcemaps
      './webpack.tests.js': ['webpack', 'sourcemap']
    },

    webpack: Object.assign({}, webpackConfig, {
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react-addons-test-utils': 'react-dom'
      }
    }),
    client: {
      // log console output in our test console
      captureConsole: true
    },

    reporters: ['dots'],
    singleRun: true, // exit after tests have completed

    webpackMiddleware: {
      noInfo: true
    },

    // Webpack takes a little while to compile -- this manifests as a really
    // long load time while webpack blocks on serving the request.
    browserNoActivityTimeout: 60000 // 60 seconds

  });
};
