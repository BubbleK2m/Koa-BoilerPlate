const doc = require('../doc');

module.exports = {
    find: ctx => {
        ctx.body = doc;
    }
};