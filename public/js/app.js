
// Vue is all about organizing code into "components"
// this 'pokemon' component lets us drop <pokemon pokemon="bulbasaur"></pokemon> tags into our HTML
Vue.component("pokemon", {
  props: ['pokemon'], //  props let you pass in dynamic values into a component (see `pokemon="bulbasaur"` above.)

  // define your html here. Vue doesn't want you to link to external files, unless you're using build tools
  template: `<div class="pokemon">
              <img :src="pokemon.sprites.front_default">
              <h3>{{pokemon.name}}</h3>
              <div class="poketypes">
                <span :class="type.type.name" v-for="type in pokemon.types">{{type.type.name}} </span>
              </div>
            </div>`,
})

// our index is set up as a component as well. For some reason it's defined slightly differently, but it acts like a component I think...
const Index = {
  // check out `v-for` below which is similar to `ng-repeat` in angular
  template: `<div class="pokemonIndex">
                <h2>CHECK THESE POKéS</h2>
                <div class="pokeContainer">
                  <pokemon v-for="poke in orderedPokemon" :pokemon="poke" :key="poke.id"></pokemon>
                </div>
              </div>`,

  // this is where you tell the component what data it has access to
  data: function(){
    return {pokemon: []}
  },

  // a "hook" specifying code to run when the component is "mounted" (i.e. connected) to the DOM
  mounted: function(){
    var resource = this.$resource('/api/pokemon{/id}');
    this.fetchPokemon(resource)
  },

  // define component methods here
  methods: {
    fetchPokemon: function(resource) {
      resource.get().then(function(pokemon) {
        console.log(pokemon.body);
        this.$set(this, 'pokemon', pokemon.body)
      });
    }
  },

  // define variables that must be dynamically updated
  computed: {
    orderedPokemon: function() {
      return this.pokemon.sort((a, b) => {
        if (a.id > b.id) {
          return 1
        }
        if (a.id < b.id) {
          return -1
        }
        return 0
      })
    }
  }

}

// define the Show component, similar to a controller in Angular
const Show = {
  template: "<div class='show'> <h2>SHOW</h2><p>{{$route.params.id}}</p></div>",
}

// set the routes
const routes = [
  { path: '/', component: Index},
  { path: '/pokemon/:id', component: Show}
]

// set the router
const router = new VueRouter({
  routes //short for routes: routes
})


// initializing our app!
const app = new Vue({
  router: router,
}).$mount("#rapidex")
