const baseConfig = require('../webpack-config-helpers/base/webpack.config');
const output = require('../webpack-config-helpers/output-prod');
const plugins = require('../webpack-config-helpers/plugins-prod');
const rules = require('../webpack-config-helpers/rules-prod');

module.exports = Object.assign({}, baseConfig, {
  output,
  module: {
    rules
  },
  plugins
});
