var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/tunely");

// module.exports.Campsite = require("./campsite.js.example");

module.exports.Album = require("./album.js");
