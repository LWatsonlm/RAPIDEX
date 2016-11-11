var Pokedex     = require("pokedex-promise-v2")
var mongoose    = require("./connection")
var Pokemon     = mongoose.model("Pokemon")

var P = new Pokedex()
var pokemon = []

Pokemon.remove({}).then(_ => {
  for (let i = 1; i < 151; i++) {
    P.getPokemonByName(i)
    .then(res => {
      console.log(res);
      pokemon.push(res)
      Pokemon.collection.insert(res)
    })
    .catch(err => {
      console.error(err);
    })
  }
})
