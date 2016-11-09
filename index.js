var express     = require("express");
var Pokedex     = require("pokedex-promise-v2")
var mongoose    = require("./db/connection");
var cors        = require("cors")
var Pokemon     = mongoose.model("Pokemon")
var P = new Pokedex()
var app = express()

app.set("port", process.env.PORT || 3001);
app.use("/assets", express.static("public"));

app.use(cors());

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});

app.get("/", (req, res) => {
  res.redirect("http://localhost:3001/index.html")
})

app.get("/api/pokemon", (req, res) => {
  Pokemon.find({}).then(pokemons => {
    res.json(pokemons)
  })
})

app.get("/api/pokemon/:id", (req, res) => {
  Pokemon.findOne({id: req.params.id}).then(pokemon => {
    res.json(pokemon)
  })
})
