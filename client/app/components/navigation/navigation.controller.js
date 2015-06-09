(function(){
  'use strict';
  angular.module('navigation')
    .controller('navbarController', navbarController)
  
  navbarController.$inject = ['$state'];
  function navbarController($state){
    var vm = this;
    vm.routes = _.reject($state.get(), {'abstract':true});
  }
})();