const text = require('body-parser');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    timeStanp: {
        type: Date,
        default: Date.now
    },
    method: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 10,
        trim: true
    },
    url: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 255,
        trim: true
    },
    statusCode: {
        type: Number,
        required: true,
        min: 100,
        max: 599
    },
    statusMessage: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 255,
        trim: true
    }
});

module.exports = mongoose.model('Log', schema);