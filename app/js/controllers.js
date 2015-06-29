'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$firebaseArray', 'FIREBASE_URL', function($firebaseArray, FIREBASE_URL) {
    // Keep a reference to the controller instance.
    var waitListController = this;

    // Connect parties to Firebase.
    var partiesReference = new Firebase(FIREBASE_URL+ 'parties');
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
      var textMessagesReference = new Firebase(FIREBASE_URL + 'textMessages');
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
  }])
  .controller('AuthController', ['$location', 'authService', function($location, authService) {
    var authController = this;

    authController.user = {
      email: '',
      password: ''
    };

    authController.register = function() {
      authService.register(authController.user)
        .then(function(user) {
          console.log(user);
          authController.login();
        }, function(error) {
          console.log(error);
        });
    };

    authController.login = function() {
      authService.login(authController.user)
        .then(function(user) {
          console.log(user);
          $location.path('/waitlist');
        }, function(error) {
          console.log(error);
        });
    };

    authController.logout = function() {
      authService.logout();
      $location.path('/');
    };
  }]);