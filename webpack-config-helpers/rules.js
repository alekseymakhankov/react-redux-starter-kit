const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsonLoaderRule = {
  test: /\.json$/,
  loader: 'json-loader'
};

const scssLoaderRule = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: '[local]--[hash:base64:6]',
          importLoaders: 1,
          minimize: true
        }
      },
      'resolve-url-loader',
      'sass-loader',
      'postcss-loader',
      'font-loader'
    ],
    publicPath: './assets/'
  })
};

const cssLoaderRule = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: '[local]--[hash:base64:6]',
          importLoaders: 1,
          minimize: true
        }
      },
      'resolve-url-loader',
      'sass-loader',
      'postcss-loader',
      'font-loader'
    ],
    publicPath: './assets/'
  })
};

const jsLoaderRule = {
  test: /\.js$/,
  use: 'babel-loader',
  exclude: /node-modules/
};

const jsxLoaderRule = {
  test: /\.jsx$/,
  use: 'babel-loader',
  exclude: /node-modules/
};

const imagesLoaderRule = {
  test: /\.(png|jpg|gif|svg)$/,
  use: [
    {
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: '[name]-[sha512:hash:base64:7].[ext]',
        publicPath: './'
      }
    }
  ]
};

const rules = [
  jsonLoaderRule,
  scssLoaderRule,
  cssLoaderRule,
  jsLoaderRule,
  jsxLoaderRule,
  imagesLoaderRule
];

module.exports = rules;
