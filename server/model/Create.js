const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: (true,'Folder name required')
    },
    userId:{
        type: String,
        required: (true,'User ID required'),
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Folder', folderSchema);