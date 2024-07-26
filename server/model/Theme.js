const mongoose = require('mongoose');

const themeschema = new mongoose.Schema({
    theme:{
        type: String,
        required: (true,'Theme required')
    },
    user:{
        type: String,
        required: (true,'User required'),
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Theme', themeschema);