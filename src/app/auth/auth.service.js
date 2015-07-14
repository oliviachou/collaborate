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

    var authServiceObject = {
      firebaseAuthObject: firebaseAuthObject,
      register: function(user) {
        return firebaseAuthObject.$createUser(user);
      },
      login: function(user) {
        return firebaseAuthObject.$authWithPassword(user);
      },
      logout: function() {
        $rootScope.$broadcast('logout');
        firebaseAuthObject.$unauth();
      },
      sendWelcomeEmail: function(emailAddress) {
        firebaseData.child('emails')
          .push({emailAddress: emailAddress});
      }
    };

    return authServiceObject;
  }

})();