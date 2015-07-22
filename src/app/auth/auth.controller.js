(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', 'authService'];

  function AuthController($location, authService) {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };
    vm.register = register;
    vm.login = login;
    vm.logout = logout;


    function register() {
      return authService.register(vm.user)
        .then(function() {
          return vm.login();
        })
        .then(function() {
          return authService.sendWelcomeEmail(vm.user.email);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function login() {
      return authService.login(vm.user)
        .then(function(user) {
          $location.path('/waitlist');
          return user;
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function logout() {
      authService.logout();
      $location.path('/');
    }
  }

})();