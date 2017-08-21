const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const Express = require('express');

const app = new Express();
const port = 8080;

let config = null;
if (process.env.NODE_ENV === 'production') {
  config = require('./webpack-configs/webpack.config-prod');
} else {
  config = require('./webpack-configs/webpack.config-dev');
}
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  contentBase: 'dist',
  hot: true,
  quiet: true,
  stats: {
    colors: true,
    chunkModules: false
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }

    res.set('content-type', 'text/html');
    res.send(result);
    res.end();

    return null;
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('Open up http://localhost:%s/ in your browser.', port, port);
  }
});
