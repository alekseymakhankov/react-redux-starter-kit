const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const plugins = require('./base/plugins-base');

plugins.push(
  new CleanWebpackPlugin(['./build/*.*'], {
    root: path.join(__dirname, '..')
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
);

module.exports = plugins;
