var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Song = require('./song.js');

var AlbumSchema = new Schema({
  name: {type: String, default: "#"},
  artistName: {type: String, default: "#"},
  releaseDate: {type: String, default: "#"},
  genres: [ String ],
  songs: [Song.schema]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
