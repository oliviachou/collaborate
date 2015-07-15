(function() {
  'use strict';

  angular
    .module('app.waitList')
    .factory('textMessageService', textMessageService);

  textMessageService.$inject = ['firebaseData'];

  function textMessageService(firebaseData) {
    var service = {
      sendTextMessage: sendTextMessage
    };

    return service;

    ////////////

    function sendTextMessage(party, uid, parties) {
      var newTextMessage = {
        phoneNumber: party.phone,
        size: party.size,
        name: party.name
      };
      firebaseData.root.child('textMessages').push(newTextMessage);
      party.notified = true;
      parties.$save(party);
    }
  }

})();