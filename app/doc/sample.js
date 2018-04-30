module.exports = {
    get: {
        method: "get",
        path: "/sample", 
        summary: "get",
        description: "sample get request",
        tags: [
            'sample'
        ],
        
        responses: {
            "200": {
                description: "sample respnose",
                examples: {
                    'text/plain': "GET /sample"
                }
            }
        }
    },

    post: {
        method: "post",
        path: "/sample",
        summary: "post",
        description: "sample post request",
        tags: [
            'sample'
        ],

        responses: {
            "200": {
                description: "sample respnose",
                examples: {
                    'text/plain': "POST /sample"
                }
            }
        }
    }
};