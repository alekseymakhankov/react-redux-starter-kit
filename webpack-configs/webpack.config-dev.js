const baseConfig = require('../webpack-config-helpers/base/webpack.config');
const output = require('../webpack-config-helpers/output-dev');
const plugins = require('../webpack-config-helpers/plugins-dev');
const rules = require('../webpack-config-helpers/rules-dev');

module.exports = Object.assign({}, baseConfig, {
  devtool: 'source-map',
  output,
  module: {
    rules
  },
  plugins
});
