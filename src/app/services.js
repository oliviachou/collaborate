(function() {
  'use strict';

  angular.module('app.services', [])
    .factory('authService', ['$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL', 'firebaseData',
      function($rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL, firebaseData) {
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
        getCurrentUser: function() {
          return $rootScope.currentUser.uid;
        },
        sendWelcomeEmail: function(emailAddress) {
          firebaseData.child('emails')
            .push({emailAddress: emailAddress});
        }
      };

      return authServiceObject;
    }])
    .factory('textMessageService', ['$firebaseArray', 'FIREBASE_URL', 'party', 'firebaseData',
      function($firebaseArray, FIREBASE_URL, party, firebaseData) {

      var textMessageServiceObject = {
        sendTextMessage: function(party, uid, parties) {
          var newTextMessage = {
            phoneNumber: party.phone,
            size: party.size,
            name: party.name
          };
          firebaseData.child('textMessages').push(newTextMessage);
          party.notified = true;
          parties.$save(party);
        }
      };

      return textMessageServiceObject;
    }]);
})();
