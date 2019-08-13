const fs = require('fs');
const Router = require('koa-router');
const { getParameter } = require('./utils');

const router = new Router();

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    // TODO: catch error here
    console.log('e', e);
  }
});

router.get('/api', async (ctx) => {
  ctx.type = 'application/json';
  ctx.body = { service: 'ansible', version: '0.0.1' };
});

router.post('/api/login', async (ctx) => {
  const username = getParameter(ctx, 'username');
  const password = getParameter(ctx, 'password');

  await new Promise((resolve) => { setTimeout(resolve, 2000); });

  if (username === 'abc' && password === '123') {
    ctx.type = 'application/json';
    ctx.body = { isAuthenticated: true };
  } else {
    ctx.status = 401;
    ctx.type = 'application/json';
    ctx.body = { isAuthenticated: false };
  }
});

router.get('*', async (ctx) => {
  if (fs.existsSync('public/index.html')) {
    ctx.type = 'html';
    ctx.body = await fs.createReadStream('public/index.html');
  } else {
    ctx.status = 404;
    ctx.body = '404 not found';
  }
});

module.exports = router;
