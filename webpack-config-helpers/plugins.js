const path = require('path');

const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const plugins = [
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '..'),
    verbose: true,
    dry: false
  }),

  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors'
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '..', 'app', 'index.html'),
    filename: 'index.html'
  }),
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
  })
];

const noHotLoader = process.argv.indexOf('--no-hot-reload') !== -1;

if (!noHotLoader) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = plugins;
