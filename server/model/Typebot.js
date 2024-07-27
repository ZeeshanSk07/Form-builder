const mongoose = require('mongoose');

const typebotschema = new mongoose.Schema({
    formName:{
        type: String,
        required: (true,'Form name required')
    },
    selectedbtn:{
        type: Array,
        required: (true,'No selected button')
    },
    userId:{
        type: String,
        required: (true,'UserId required'),
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Typebot', typebotschema);