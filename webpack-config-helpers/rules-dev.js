const rules = require('./base/rules-base');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaderRule = {
  test: /\.(css|scss)$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: '[local]--[hash:base64:6]',
          minimize: false
        }
      },
      'resolve-url-loader',
      'sass-loader',
      'postcss-loader',
      'font-loader'
    ],
    publicPath: './assets/'
  }),
  exclude: /node_modules/
};

const cssVendorLoaderRule = {
  test: /\.(css|scss)$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          localIdentName: '[local]--[hash:base64:6]',
          minimize: false
        }
      },
      'resolve-url-loader',
      'sass-loader',
      'postcss-loader',
      'font-loader'
    ],
    publicPath: './assets/'
  }),
  include: /node_modules/
};

const lessLoaderRule = {
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          localIdentName: '[local]--[hash:base64:6]',
          minimize: false
        }
      },
      'resolve-url-loader',
      'less-loader',
      'postcss-loader',
      'font-loader'
    ],
    publicPath: './assets/'
  }),
  include: /node_modules/
};


rules.push(cssLoaderRule, cssVendorLoaderRule, lessLoaderRule);

module.exports = rules;
