module.exports = {
    get: ctx => {
        ctx.body = "GET /sample"
    },

    post: ctx => {
        ctx.body = "POST /sample"
    }
}