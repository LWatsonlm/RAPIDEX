angular
  .module("rapidex", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("PokemonFactory", [
    "$resource",
    PokemonFactoryFunction
  ])
  .controller("PokeIndexController", [
    "PokemonFactory",
    PokeIndexControllerFunction
  ])
  .controller("PokeShowController", [
    "$stateParams",
    "PokemonFactory",
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

  function PokemonFactoryFunction($resource) {
    return $resource("http://localhost:3001/api/pokemon/:id")
  }

  function PokeIndexControllerFunction(PokemonFactory) {
    this.pokemon = PokemonFactory.query()
  }

  function PokeShowControllerFunction($stateParams, PokemonFactory) {
    this.pokemon = PokemonFactory.get({id: $stateParams.id})
  }
