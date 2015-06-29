'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('FIREBASE_URL', 'https://gz-angularfire-test.firebaseio.com/')
  .factory('authService', function($firebaseAuth, FIREBASE_URL) {
    var authReference = new Firebase(FIREBASE_URL);
    var firebaseAuthObject = $firebaseAuth(authReference);

    return {
      login: function(user) {
        return firebaseAuthObject.$authWithPassword(user);
      }
    };
  });
