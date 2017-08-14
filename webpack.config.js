const path = require('path');
const entry = require('./webpack-config-helpers/entry');
const output = require('./webpack-config-helpers/output');
const plugins = require('./webpack-config-helpers/plugins');
const rules = require('./webpack-config-helpers/rules');

module.exports = {
  devtool: 'eval-source-map',
  entry,
  output,
  module: {
    rules
  },
  plugins,
  resolve: {
    modules: [
      path.join(process.cwd(), 'application'),
      'node_modules'
    ],
    extensions: ['.js', '.json'],
    alias: {
      actions: path.join(__dirname, 'app', 'actions'),
      components: path.join(__dirname, 'app', 'components'),
      constants: path.join(__dirname, 'app', 'constants'),
      base: path.join(__dirname, 'app', 'base'),
      fields: path.join(__dirname, 'app', 'fields'),
      forms: path.join(__dirname, 'app', 'forms'),
      pages: path.join(__dirname, 'app', 'pages'),
      reducers: path.join(__dirname, 'app', 'reducers'),
      routes: path.join(__dirname, 'app', 'routes'),
      assets: path.join(__dirname, 'assets')
    }
  }
};
