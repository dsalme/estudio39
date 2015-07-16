(function () {
  'use strict';
  angular.module('activities', ['ui.router'])
    .config(activitiesConfig);

  activitiesConfig.$inject = ['$stateProvider'];
  function activitiesConfig($stateProvider) {
    $stateProvider
      .state("activities", {
        url: "/activities",
        templateUrl: "app/activities/activities.html",
        controller: "activitiesController",
        controllerAs: "vm",
        routeAlias: "Activities",
        resolve: {
          activities: resolveFunction
        }
      })
  }

  resolveFunction.$inject = ['activitiesFactory'];
  function resolveFunction(activitiesFactory){
    return activitiesFactory.getActivities();
  }
})();