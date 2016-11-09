angular
  .module("rapidex", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("PokeIndexController", [
    PokeIndexControllerFunction
  ])
  .controller("PokeShowController", [
    PokeShowControllerFunction
  ])

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("pokeIndex", {
      url: "/",
      templateUrl: "js/ng-views/index.html",
      controller: "PokeIndexController",
      controllerAs: "vm"
    })
    .state("pokeShow", {
      url: "/pokemon/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "PokeShowController",
      controllerAs: "vm"
    })
  }

  function PokeIndexControllerFunction() {
    console.log("i'm in your index");
  }

  function PokeShowControllerFunction() {
    console.log("I'm in your show ");
  }
