const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const plugins = require('./base/plugins-base');

plugins.push(
  new CleanWebpackPlugin(['./build/*.*'], {
    root: path.join(__dirname, '..')
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendors', 'manifest']
  }),
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    proxy: 'http://localhost:8080/'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
);

module.exports = plugins;
