console.log(seeds.length);

Vue.component("pokemon", {
  props: ['pokemon'], //  data is passing down to child components using props
  template: '<div class="pokemon">Gotta Catch em all, Pokemon {{pokemon}}</div>',
})

const Index = {
  template: '<div class="pokemonIndex"><pokemon v-for="poke in pokemon"></pokemon></div>',
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
  data: {
    pokemon: seeds
  }
}).$mount("#rapidex")
