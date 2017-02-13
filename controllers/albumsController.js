var db = require("../models");

//Get /api/AlbumSchema
function index(req, res){
  db.Album.find({}, function(err, album){
    if(err){console.log(err);}
    res.json(album);
  })
}

//POST /api/albums

function create(req, res){
  var name = req.body.name;
  var artistName = req.body.artistName;
  var genres = req.body.genres.split(', ');
  var releaseDate = req.body.releaseDate;
  db.Album.create({name: name, artistName: artistName, genres: genres, releaseDate: releaseDate}, function(err, album){
    res.json([album]);
  })
}

//GET /api/albums/:albumId
function show(req, res){
  //find one album by id and send it back as json
}

//DELETE /api/albums/:albumId
function destroy(req, res){
  //find one album by id, delete it, and send it back as json
}

//PUT /api/albums/:albumId
function update(req, res){
  //find one album by id, update it based on request body,
  //and send it back as json
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
