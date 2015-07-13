(function() {
  'use strict';

  angular.module('app.services', [])
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
