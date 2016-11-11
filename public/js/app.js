
Vue.component("pokemon", {
  props: ['pokemon'], //  data is passing down to child components using props
  template: `<div class="pokemon">
              <img :src="pokemon.sprites.front_default">
              <h3>{{pokemon.name}}</h3>

            </div>`,
})

const Index = {
  template: `<div class="pokemonIndex">
                <h2>CHECK THESE POKéS</h2>
                <pokemon v-for="poke in orderedPokemon" :pokemon="poke" :key="poke.id"></pokemon>
              </div>`,

  data: function(){
    return {pokemon: []}
  },

  mounted: function(){
    var resource = this.$resource('/api/pokemon{/id}');
    this.fetchPokemon(resource)
  },

  methods: {
    fetchPokemon: function(resource) {
      resource.get().then(function(pokemon) {
        console.log(pokemon.body);
        this.$set(this, 'pokemon', pokemon.body)
      });
    }
  },

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

const Show = {
  template: "<div class='show'> <h2>SHOW</h2> <pokemon pokemon='bulbasuar'></pokemon> <p>{{$route.params.id}}</p></div>",
}

const routes = [
  { path: '/', component: Index},
  { path: '/pokemon/:id', component: Show}
]

const router = new VueRouter({
  routes //short for routes: routes
})

const app = new Vue({
  router: router,
}).$mount("#rapidex")
