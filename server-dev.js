const webpack = require('webpack');
const app = require('./app');
const router = require('./server/router');
const clientConfig = require('./webpack.config.dev');
const hotMiddleware = require('./utils/koa-webpack-hot-middleware');
const devMiddleware = require('./utils/koa-webpack-dev-middleware');

const { publicPath } = clientConfig.output;
const clientCompiler = webpack(clientConfig);

app.use(devMiddleware(clientCompiler, { hot: true, publicPath }));
app.use(hotMiddleware(clientCompiler, { heartbeat: 5000 }));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('dev server listening on port 8080');
});
