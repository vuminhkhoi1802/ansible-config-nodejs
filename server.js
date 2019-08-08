const app = require('./app');
const router = require('./server/router');

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
