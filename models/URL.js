const mongoose = require('mongoose');
const shortID = require('shortid');

const URL_Schema = new mongoose.Schema({
    original: {
        type: String,
        required: true
    },
    shortened: {
        type: String,
        required: true,
        default: shortID.generate
    }
});

module.exports = mongoose.model('URL', URL_Schema);