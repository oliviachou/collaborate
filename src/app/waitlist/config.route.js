(function() {
  'use strict';

  angular
    .module('app.waitList')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/waitlist', {
      templateUrl: 'app/waitList/waitList.html',
      controller: 'WaitlistController',
      controllerAs: 'vm',
      resolve: {currentUser: resolveCurrentUser}
    });
  }

  resolveCurrentUser.$inject = ['authService'];

  function resolveCurrentUser(authService) {
    return authService.firebaseAuthObject.$requireAuth();
  }

})();