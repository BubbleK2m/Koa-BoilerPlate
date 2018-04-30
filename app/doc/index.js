const sample = require('./sample');

const docs = [
    sample.get,
    sample.post
];

const swagger = {
    swagger: '2.0',
    
    info: {
        description: "sample API documentation",
        version: '1.0.0',
        title: 'Swagger Petstore',
        termsOfService: 'http://swagger.io/terms/',

        contact: {
            email: 'apiteam@swagger.io'
        },

        license: {
            name: 'Apache 2.0',
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },

    host: 'sample-app.herokuapp.com',
    basePath: '/',
    
    tags: [
        {
            name: 'sample',
            description: 'sample requests'
        }
    ],

    schemes: [
      'https'
    ],

    paths: {}
};

for(let doc of docs) {
    let { method, path, ...spec } = doc;
    
    if (!swagger.paths[path]) swagger.paths[path] = {}; 
    swagger.paths[path][method] = spec;
}

module.exports = swagger;
