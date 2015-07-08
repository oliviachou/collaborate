(function() {
  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.waitList',
      'myApp.services',
      'myApp.controllers',
      'firebase'
    ])
    .run(['$rootScope', '$location', function($rootScope, $location) {
      $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
        if (error === "AUTH_REQUIRED") {
          $location.path('/');
        }
      });
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'partials/landing_page.html',
          controller: 'LandingPageController'
        });
        $routeProvider.when('/register', {
          templateUrl: 'partials/register.html',
          controller: 'AuthController',
          controllerAs: 'authController'
        });
        $routeProvider.when('/login', {
          templateUrl: 'partials/login.html',
          controller: 'AuthController',
          controllerAs: 'authController'
        });
        $routeProvider.otherwise({
          redirectTo: '/'
        });
      }]);
})();