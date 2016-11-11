console.log(seeds.length);

Vue.component("pokemon", {
  props: ['pokemon'], //  data is passing down to child components using props
  template: '<div class="pokemon">{{pokemon.name}}</div>',
})

const Index = {
  // template: '<div class="pokemonIndex">HEY HELLO</pokemon></div>',
  template: '<div class="pokemonIndex"><h2>CHECK THESE POKES</h2><pokemon v-for="poke in pokemon" :pokemon="poke" :key="poke.id"></pokemon></div>',
  data: function(){
    return {pokemon: seeds}
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
