(function() {
  'use strict';

  angular
    .module('myApp.waitList')
    .config(appRun);

  appRun.$inject = ['$routeProvider'];

  function appRun($routeProvider) {
    $routeProvider.when('/waitlist-modular', {
      templateUrl: 'app/waitList/waitList.html',
      controller: 'WaitList'
    });
  }

})();