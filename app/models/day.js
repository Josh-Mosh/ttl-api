var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var day = new Schema({
  id: ObjectId,
  updated: { type: Date, default: Date.now },
  date: Date,
  lat: Number,
  long: Number,
  chapter: Number,
  leagues: Number,
  excerpt: String,
  location: String
});

module.exports = mongoose.model('day', day);