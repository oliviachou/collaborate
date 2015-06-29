'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController',
  ['$firebaseArray', 'FIREBASE_URL', 'partyService', 'textMessageService', 'authService',
    function($firebaseArray, FIREBASE_URL, partyService, textMessageService, authService) {
    // Keep a reference to the controller instance.
    var waitListController = this;

    // Connect parties to Firebase.
    waitListController.parties = partyService.parties;

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
      partyService.saveParty(waitListController.newParty, authService.getCurrentUser());
      waitListController.newParty = {};
    };

    // Function to send a text message to a party.
    waitListController.sendTextMessage = function(party) {
      textMessageService.sendTextMessage(party);
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