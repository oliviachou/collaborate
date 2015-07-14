(function() {
  'use strict';

  angular
    .module('app.waitList')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider.when('/waitlist', {
      templateUrl: 'app/waitList/waitList.html',
      controller: 'WaitList',
      controllerAs: 'vm',
      resolve: {currentUser: resolveCurrentUser}
    });
  }

  resolveCurrentUser.$inject = ['authService'];

  function resolveCurrentUser(authService) {
    return authService.firebaseAuthObject.$requireAuth();
  }

})();