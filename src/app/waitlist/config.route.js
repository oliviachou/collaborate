(function() {
  'use strict';

  angular
    .module('myApp.waitList')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];
  resolveCurrentUser.$inject = ['authService'];

  function appConfig($routeProvider) {
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