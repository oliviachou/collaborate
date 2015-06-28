'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$firebaseArray', function($firebaseArray) {
    // Keep a reference to the controller instance.
    var waitListController = this;

    // Connect parties to Firebase.
    var partiesReference = new Firebase('https://gz-angularfire-test.firebaseio.com/parties');
    waitListController.parties = $firebaseArray(partiesReference);

    // Object to store data from the waitlist form.
    waitListController.newParty = {
      name: '',
      phone: '',
      size: '',
      done: false,
      notified: false
    };

    // Function to save a new party to the waitlist.
    waitListController.saveParty = function() {
      waitListController.parties.$add(waitListController.newParty);
      waitListController.newParty = {};
    };

    // Function to send a text message to a party.
    waitListController.sendTextMessage = function(party) {
      var textMessagesReference = new Firebase('https://gz-angularfire-test.firebaseio.com/textMessages');
      var textMessages = $firebaseArray(textMessagesReference);
      var nexTextMessage = {
        phoneNumber: party.phone,
        size: party.size,
        name: party.name
      };
      textMessages.$add(nexTextMessage);
      party.notified = true;
      waitListController.parties.$save(party);
    };
  }]);