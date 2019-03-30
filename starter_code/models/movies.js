const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title : String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
})

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;