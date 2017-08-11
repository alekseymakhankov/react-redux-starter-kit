const path = require('path');

const output = {
  path: path.resolve(__dirname, '..', 'dist'),
  filename: '[name]-[hash].js',
  library: '[name]',
  publicPath: '/'
};

module.exports = output;
