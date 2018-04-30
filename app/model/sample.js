const mongoose = require('../../lib/mongoose');
const { Schema } = mongoose;

const Sample = new Schema({
    name: String
});

module.exports = mongoose.model('samples', User);