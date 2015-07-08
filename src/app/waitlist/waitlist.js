(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitList', WaitList);

  WaitList.$inject = ['partyService', 'textMessageService', 'currentUser'];

  function WaitList(partyService, textMessageService, currentUser) {
    // Keep a reference to the controller instance.
    var waitListController = this;

    // Connect parties to Firebase.
    waitListController.parties = partyService.getPartiesByUser(currentUser.uid);

    // Object to store data from the waitList form.
    waitListController.newParty = {
      name: '',
      phone: '',
      size: '',
      done: false,
      notified: false
    };

    // Function to save a new party to the waitList.
    waitListController.saveParty = function() {
      partyService.saveParty(waitListController.newParty, currentUser.uid);
      waitListController.newParty = {};
    };

    // Function to send a text message to a party.
    waitListController.sendTextMessage = function(party) {
      textMessageService.sendTextMessage(party, currentUser.uid, waitListController.parties);
    };
  }

})();