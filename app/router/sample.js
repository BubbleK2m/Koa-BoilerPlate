const Router = require('koa-router');
const Sample = require('../handler/sample');

const sample = new Router();

sample.get('/sample', Sample.get);
sample.post('/sample', Sample.post);

module.exports = sample;