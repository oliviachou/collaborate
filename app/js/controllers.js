'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$firebaseArray', function($firebaseArray) {
    // Connect parties to Firebase.
    var partiesReference = new Firebase('https://gz-angularfire-test.firebaseio.com/parties');
    this.parties = $firebaseArray(partiesReference);

    // Object to store data from the waitlist form.
    this.newParty = {
      name: '',
      phone: '',
      size: ''
    };

    // Function to save a new party to the waitlist.
    this.saveParty = function() {
      this.parties.$add(this.newParty);
      this.newParty = {};
    };

    // Function to send a text message to a party.
    this.sendTextMessage = function(party) {
      var textMessagesReference = new Firebase('https://gz-angularfire-test.firebaseio.com/textMessages');
      var textMessages = $firebaseArray(textMessagesReference);
      textMessages.$add({
        phoneNumber: party.phone,
        size: party.size,
        name: party.name
      });
    };
  }]);