(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',

      // Third party modules.
      'firebase',

      // Custom modules.
      'app.auth',
      'app.core',
      'app.landing',
      'app.waitList'
    ])
    .config(appConfig)
    .run(appRun);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }

  appRun.$inject = ['$rootScope', '$location'];

  function appRun($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path('/');
      }
    });
  }

})();