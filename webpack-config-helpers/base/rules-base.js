const jsonLoaderRule = {
  test: /\.json$/,
  loader: 'json-loader'
};

const jsLoaderRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    query: {
      cacheDirectory: true
    }
  }]
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

const filesLoaderRule = {
  test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts/',
      publicPath: './'
    }
  }]
};

const rules = [
  jsonLoaderRule,
  jsLoaderRule,
  imagesLoaderRule,
  filesLoaderRule
];

module.exports = rules;
