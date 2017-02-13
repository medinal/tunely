var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  albumName: {type: String, default: "#"},
  artistName: {type: String, default: "#"},
  image: {type: String, default: "#"},
  release: {type: String, default: "#"}
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
