(function() {
  'use strict';

  angular
    .module('app.waitList')
    .run(appRun);

  appRun.$inject =['$routeProvider'];

  function appRun($routeProvider) {
    $routeProvider.when('/waitlist', {
      templateUrl: 'app/waitList/waitList.html',
      controller: 'WaitListController',
      controllerAs: 'vm',
      resolve: {
        currentUser: ['$location', 'authService', function($location, authService) {
          return authService.firebaseAuthObject.$requireAuth();
        }]
      }
    });
  }
})();