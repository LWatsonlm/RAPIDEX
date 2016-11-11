const Index = {
  template: "<h2>INDEX</h2>",
}

const Show = {
  template: "<div class='show'> <h2>SHOW</h2> <p>{{$route.params.id}}</p></div>",
}

const routes = [
  { path: '/', component: Index},
  { path: '/pokemon/:id', component: Show}
]

const router = new VueRouter({
  routes //short for routes: routes
})

const app = new Vue({
  router
}).$mount("#rapidex")
