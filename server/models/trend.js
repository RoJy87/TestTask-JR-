const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  stars: {
    type: String,
    required: true,
  },
  repositoryName: {
    type: String,
    required: true,
  },
  repository: {
    type: String,
    required: true,
    uniqe: true,
  },
  owner: {
    type: Number,
    required: true,
    uniqe: true,
  },
});

module.exports = mongoose.model('trend', trendSchema);
