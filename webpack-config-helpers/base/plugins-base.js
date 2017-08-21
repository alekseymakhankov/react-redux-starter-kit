const path = require('path');

const webpack = require('webpack');


const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const plugins = [
  new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    allChunks: true
  }),
  new HtmlWebpackPlugin({
    template: path.resolve('app', 'index.html'),
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true
    }
  })
];

const noHotLoader = process.argv.indexOf('--no-hot-reload') !== -1;

if (!noHotLoader) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = plugins;
