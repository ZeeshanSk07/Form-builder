const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    typebotId : {
        type: String,
        required: true
    },
    response : {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Response', responseSchema);