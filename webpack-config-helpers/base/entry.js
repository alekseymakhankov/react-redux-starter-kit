const path = require('path');
const pkg = require('../../package.json');

const entry = {
  app: path.resolve('app', 'index.js'),
  vendors: Object.keys(pkg.dependencies)
};

if (process.env.NODE_ENV !== 'production') {
  entry.client = 'webpack-hot-middleware/client';
}

module.exports = entry;
