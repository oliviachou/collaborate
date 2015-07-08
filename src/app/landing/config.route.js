(function() {
  'use strict';

  angular
    .module('app.landing')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/landing/landing.html'
    });
  }

})();