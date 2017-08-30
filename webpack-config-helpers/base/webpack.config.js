const path = require('path');
const entry = require('./entry');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry,
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      'node_modules'
    ],
    extensions: ['*', '.js', '.json', '.jsx'],
    alias: {
      actions: path.join(process.cwd(), 'app', 'actions'),
      assets: path.join(process.cwd(), 'assets'),
      base: path.join(process.cwd(), 'app', 'base'),
      components: path.join(process.cwd(), 'app', 'components/'),
      constants: path.join(process.cwd(), 'app', 'constants'),
      fields: path.join(process.cwd(), 'app', 'fields'),
      forms: path.join(process.cwd(), 'app', 'forms'),
      helpers: path.join(process.cwd(), 'app', 'helpers'),
      pages: path.join(process.cwd(), 'app', 'pages'),
      reducers: path.join(process.cwd(), 'app', 'reducers'),
      routes: path.join(process.cwd(), 'app', 'routes')
    }
  }
};
