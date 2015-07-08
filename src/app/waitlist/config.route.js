(function() {
  'use strict';

  angular
    .module('myApp.waitList')
    .config(appRun);

  appRun.$inject = ['$routeProvider'];
  resolveCurrentUser.$inject = ['authService'];

  function appRun($routeProvider) {
    $routeProvider.when('/waitlist', {
      templateUrl: 'app/waitList/waitList.html',
      controller: 'WaitList',
      controllerAs: 'vm',
      resolve: {currentUser: resolveCurrentUser}
    });
  }

  function resolveCurrentUser(authService) {
    return authService.firebaseAuthObject.$requireAuth();
  }

})();