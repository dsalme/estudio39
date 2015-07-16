(function () {
  'use strict';
  angular.module('activities')
    .controller('activitiesController', ActivitiesController);

  ActivitiesController.$inject = ['activitiesFactory', 'activities', '$scope'];
  function ActivitiesController(activitiesFactory, activities, $scope) {
    var vm = this;
    vm.activities = activities;
    vm.evalEditor = evalEditor;
    vm.executeCode = $scope.executeCode;

    function evalEditor(string){
    }
  }
}());