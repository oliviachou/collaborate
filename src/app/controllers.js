(function() {
  'use strict';

  /* Controllers */

  angular.module('app.controllers', [])
    .controller('LandingPageController', [function() {

    }])
    .controller('AuthController', ['$location', 'authService', function($location, authService) {
      var authController = this;

      authController.user = {
        email: '',
        password: ''
      };

      authController.register = function() {
        authService.register(authController.user)
          .then(function(user) {
            return authController.login();
          })
          .then(function(user) {
            return authService.sendWelcomeEmail(user.password.email);
          })
          .catch(function(error) {
            console.log(error);
          });
      };

      authController.login = function() {
        return authService.login(authController.user)
          .then(function(user) {
            $location.path('/waitlist');
            return user;
          })
          .catch(function(error) {
            console.log(error);
          });
      };

      authController.logout = function() {
        authService.logout();
        $location.path('/');
      };

    }]);
})();