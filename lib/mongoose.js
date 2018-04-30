const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connect = async url => {
    try {
        await mongoose.connect(url);
    } catch (e) {
        console.error(e);
    }

    console.log('connected mongodb');
};

connect(process.env["MONGO_URL"]);
module.exports = mongoose;