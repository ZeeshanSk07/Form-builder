const mongoose = require('mongoose');

const pageViewSchema = new mongoose.Schema({
  pageId: { type: String, required: true },
  views: { type: Number, default: 0 }
});

module.exports = mongoose.model('PageView', pageViewSchema);