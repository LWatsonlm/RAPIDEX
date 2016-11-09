var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/rapidex")

module.exports = mongoose

var PokemonSchema = mongoose.Schema({
  name: String,
  id: Number,
})

mongoose.model("Pokemon", PokemonSchema)
mongoose.Promise = global.Promise
