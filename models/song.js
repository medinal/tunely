var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SongSchema = new Schema({
  name: {type: String, default: "#"},
  trackNumber: {type: Number, default: "1"},
});

var Song = mongoose.model('Song', SongSchema);

module.exports = Song;
