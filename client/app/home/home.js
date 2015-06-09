(function () {
  'use strict';
  angular.module('home', ['ui.router'])
    .config(homeConfig);

  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
  function homeConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "app/home/home.html",
        routeAlias: "Home"
      })
  }
})();