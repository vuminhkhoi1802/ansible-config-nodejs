const fs = require('fs');
const Router = require('koa-router');

const router = new Router();

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    // TODO: catch error here
    console.log('e', e);
  }
});

router.get('/api', (ctx) => {
  ctx.type = 'application/json';
  ctx.body = { service: 'ansible', version: '0.0.1' };
});

router.get('*', async (ctx) => {
  ctx.type = 'html';
  ctx.body = await fs.createReadStream('public/index.html');
});

module.exports = router;
