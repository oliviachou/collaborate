(function() {
  'use strict';

  angular
    .module('app.waitlist')
    .controller('Waitlist', WaitList);

  WaitList.$inject = ['$firebaseArray', 'FIREBASE_URL', 'partyService', 'textMessageService', 'authService', 'currentUser'];

  function WaitList($firebaseArray, FIREBASE_URL, partyService, textMessageService, authService, currentUser) {
    // Keep a reference to the controller instance.
    var vm = this;

    // Connect parties to Firebase.
    vm.parties = partyService.getPartiesByUser(currentUser.uid);

    // Object to store data from the waitList form.
    vm.newParty = {
      name: '',
      phone: '',
      size: '',
      done: false,
      notified: false
    };

    // Function to save a new party to the waitList.
    vm.saveParty = function() {
      partyService.saveParty(vm.newParty, currentUser.uid);
      vm.newParty = {};
    };

    // Function to send a text message to a party.
    vm.sendTextMessage = function(party) {
      textMessageService.sendTextMessage(party, currentUser.uid, vm.parties);
    };
  }
})();