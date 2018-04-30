const Koa = require('koa');

const app = new Koa();
const router = require('./router');

const body = require('koa-bodyparser');
const cors = require('koa2-cors');
const swagger = require('../lib/swagger');

app.use(cors());
app.use(body());
app.use(swagger());

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;