var express     = require("express");
var Pokedex     = require("pokedex-promise-v2")
var mongoose    = require("./db/connection");
var Pokemon     = mongoose.model("Pokemon")
var P = new Pokedex()
var app = express()

app.set("port", process.env.PORT || 3001);
app.use("/assets", express.static("public"));

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});

app.get("/api/pokemon", (req, res) => {
  console.log("trying to show you some siiiick pokes");
  Pokemon.find({}).then(pokemons => {
    res.json(pokemons)
  })
})
