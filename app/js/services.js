'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('FIREBASE_URL', 'https://gz-angularfire-test.firebaseio.com/')
  .factory('authService', ['$rootScope', '$firebaseAuth', 'FIREBASE_URL', function($rootScope, $firebaseAuth, FIREBASE_URL) {
    var authReference = new Firebase(FIREBASE_URL);
    var firebaseAuthObject = $firebaseAuth(authReference);

    firebaseAuthObject.$onAuth(function(currentUser) {
      $rootScope.currentUser = currentUser;
    });

    var authServiceObject = {
      register: function(user) {
        return firebaseAuthObject.$createUser(user);
      },
      login: function(user) {
        return firebaseAuthObject.$authWithPassword(user);
      },
      logout: function() {
        firebaseAuthObject.$unauth();
      }
    };

    return authServiceObject;
  }]);
