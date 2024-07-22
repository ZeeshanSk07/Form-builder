const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: (true,'Folder name required')
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Folder', folderSchema);