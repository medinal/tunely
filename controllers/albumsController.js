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
  //create an album based on request body and send it back as json
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
