const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  HadithImage: String,
  HadithTitle: String,
  HadithName: String,
  HadithDescription: String,
  Date: Date
});

const List = mongoose.model('List', listSchema);

module.exports = List;
