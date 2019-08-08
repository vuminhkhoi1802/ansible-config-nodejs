const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');

const app = new Koa();

app.use(serve('public'));

const router = new Router();

router.get('/api', (ctx) => {
  ctx.type = 'application/json';
  ctx.body = { service: 'ansible', version: '0.0.1' };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
