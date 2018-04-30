const jwt = require('../../lib/jwt');

module.exports = () => {
    return async (ctx, next) => {
        ctx.jwt = ctx.request.headers["x-access-token"];
        if (!ctx.jwt) return ctx.throw(400, "Cannot Found JWT");

        ctx.item = await jwt.decode(ctx.jwt);
        if (!ctx.user) return ctx.throw(400, "Invalid JWT");
        
        await next();
    }
};