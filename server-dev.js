const webpack = require('webpack');
const clientConfig = require('./webpack.config.dev');
const hotMiddleware = require('./utils/koa-webpack-hot-middleware');
const devMiddleware = require('./utils/koa-webpack-dev-middleware');
const app = require('./app');

const { publicPath } = clientConfig.output;
const clientCompiler = webpack(clientConfig);

app.use(devMiddleware(clientCompiler, { publicPath }));
app.use(hotMiddleware(clientCompiler, { heartbeat: 5000 }));

app.listen(8080, () => {
  console.log('dev server listening on port 8080');
});
