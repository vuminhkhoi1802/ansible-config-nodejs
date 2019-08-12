const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(serve('public'));

module.exports = app;
