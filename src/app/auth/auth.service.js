(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

  authService.$inject = ['$rootScope', '$firebaseAuth', 'firebaseData'];

  function authService($rootScope, $firebaseAuth, firebaseData) {
    var firebaseAuthObject = $firebaseAuth(firebaseData);

    $rootScope.currentUser = null;

    firebaseAuthObject.$onAuth(function(currentUser) {
      $rootScope.currentUser = currentUser;
    });


    var service = {
      firebaseAuthObject: firebaseAuthObject,
      register: register,
      login: login,
      logout: logout,
      sendWelcomeEmail: sendWelcomeEmail
    };

    return service;

    ////////////

    function register(user) {
      return firebaseAuthObject.$createUser(user);
    }

    function login(user) {
      return firebaseAuthObject.$authWithPassword(user);
    }

    function logout() {
      $rootScope.$broadcast('logout');
      firebaseAuthObject.$unauth();
    }

    function sendWelcomeEmail(emailAddress) {
      firebaseData.child('emails')
        .push({emailAddress: emailAddress});
    }

  }

})();