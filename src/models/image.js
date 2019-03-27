const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  imageURL: String,
  public_id: String
});

module.exports = mongoose.model('Image', imageSchema);