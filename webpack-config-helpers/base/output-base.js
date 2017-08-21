const path = require('path');

const output = {
  path: path.resolve('build'),
  filename: '[name]-[hash].js',
  publicPath: '/'
};

module.exports = output;
