const jwt = require("jsonwebtoken");

module.exports = { 
    encode: (payload, options) => {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, process.env["JWT_SECRET"], options, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    },

    decode: (token) => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env["JWT_SECRET"], (err, item) =>  {
                if (err) {
                    reject(err);
                } else {
                    resolve(item);
                }
            });
        })
    }
};