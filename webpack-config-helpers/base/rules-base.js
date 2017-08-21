const jsonLoaderRule = {
  test: /\.json$/,
  loader: 'json-loader'
};

const jsLoaderRule = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  exclude: /node-modules/,
  query: { compact: false }
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
  jsLoaderRule,
  imagesLoaderRule
];

module.exports = rules;
