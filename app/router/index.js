const Router = require('koa-router');
const router = new Router();

const doc = require('./doc');
const sample = require('./sample');

router.use(doc.routes());
router.use(sample.routes());

module.exports = router;