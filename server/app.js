const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./src/router');

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(serve('public'));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
