(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('Auth', Auth);

  Auth.$inject = ['$location', 'authService'];

  function Auth($location, authService) {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };
    vm.register = register;
    vm.login = login;
    vm.logout = logout;


    function register() {
      authService.register(vm.user)
        .then(function(user) {
          return vm.login();
        })
        .then(function(user) {
          return authService.sendWelcomeEmail(user.password.email);
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
          console.log(error);
        });
    }

    function logout() {
      authService.logout();
      $location.path('/');
    }
  }

})();