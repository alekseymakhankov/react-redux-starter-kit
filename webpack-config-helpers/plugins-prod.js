const path = require('path');
const webpack = require('webpack');
const plugins = require('./base/plugins-base');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new CleanWebpackPlugin(['./dist/*.*'], {
    root: path.join(__dirname, '..')
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    minChunks: Infinity
  }),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    minimize: true,
    mangle: {
      screw_ie8: true,
      keep_fnames: true
    },
    comments: false, // remove comments
    compress: {
      unused: true,
      dead_code: true,
      warnings: false,
      drop_debugger: true,
      conditionals: true,
      evaluate: true,
      drop_console: true,
      sequences: true,
      booleans: true
    }
  })
  // new BundleAnalyzerPlugin()
);

module.exports = plugins;
