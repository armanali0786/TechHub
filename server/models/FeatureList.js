const mongoose = require('mongoose');

const featureListSchema = new mongoose.Schema({
  programs: {
    type: [String], // Array of strings
    required: true
  }
});

const FeatureList = mongoose.model('FeatureList', featureListSchema);

module.exports = FeatureList;
