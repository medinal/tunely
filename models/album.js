var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  name: {type: String, default: "#"},
  artistName: {type: String, default: "#"},
  releaseDate: {type: String, default: "#"},
  genres: [ String ]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
