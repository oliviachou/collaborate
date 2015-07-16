(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('gzNavbar', function() {
      return {
        templateUrl: 'app/layout/navbar.html',
        restrict: 'E',
        scope: {
          currentUser: '='
        }
      }
    });
})();