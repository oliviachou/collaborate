(function() {
  'use strict';

  angular
    .module('app', [
      // Angular and third-party modules.
      'ngRoute',
      'firebase',

      // Custom modules.
      'app.waitList',
      'app.auth',

      // To be removed.
      'app.services',
      'app.controllers'
    ])
    .run(appRun)
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'partials/landing_page.html',
          controller: 'LandingPageController'
        });
        $routeProvider.otherwise({
          redirectTo: '/'
        });
      }]);

  appRun.$inject = ['$rootScope', '$location'];

  function appRun($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path('/');
      }
    });
  }

})();