(function () {
  'use strict';
  angular.module('activities')
    .controller('activitiesController', ActivitiesController);

  ActivitiesController.$inject = ['activitiesFactory', 'activities'];
  function ActivitiesController(activitiesFactory, activities) {
    var vm = this;
    vm.activities = activities;
  }
})();