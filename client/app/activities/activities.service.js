(function () {
  'use strict';
  angular.module('activities').
    factory('activitiesFactory', activitiesFactory);

  activitiesFactory.$inject = [];
  function activitiesFactory() {
    var factory = {
      getActivities: getActivities
    };

    return factory;

  }

  getActivities.$inject = ['$http'];
  function getActivities($http) {
    var activities = [
      {name: "piano"},
      {name: "guitarra"},
      {name: "violin"}
    ];
    /**
     * $http.get('api/activities').success(function(response){
       * })
     */
    return activities;
  }

})();