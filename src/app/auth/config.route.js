(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'app/auth/register.html',
      controller: 'Auth',
      controllerAs: 'vm'
    });
    $routeProvider.when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'Auth',
      controllerAs: 'vm'
    });
  }

})();