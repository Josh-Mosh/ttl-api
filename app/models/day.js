var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var day = new Schema({
  id: ObjectId,
  updated: { type: Date, default: Date.now },
  date: Date,
  lat: String,
  long: String,
  chapter: String,
  leagues: Number,
  excerpt: String
});

module.exports = mongoose.model('day', day);