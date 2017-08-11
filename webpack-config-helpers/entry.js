const path = require('path');
const pkg = require('../package.json');

const entry = {
  client: 'webpack-hot-middleware/client',
  app: path.join(__dirname, '..', 'app', 'index.js'),
  vendors: Object.keys(pkg.dependencies)
};

module.exports = entry;
