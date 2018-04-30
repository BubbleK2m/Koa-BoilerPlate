const swagger = require('koa2-swagger-ui');

module.exports = () => {
    return swagger({
        routePrefix: '/doc',
        swaggerOptions: {
            url: process.env["SWAGGER_PATH"]
        },
    });
};