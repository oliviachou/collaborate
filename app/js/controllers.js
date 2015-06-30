'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController',
  ['$firebaseArray', 'FIREBASE_URL', 'partyService', 'textMessageService', 'authService', 'currentUser',
    function($firebaseArray, FIREBASE_URL, partyService, textMessageService, authService, currentUser) {
    // Keep a reference to the controller instance.
    var waitListController = this;

    // Connect parties to Firebase.
    waitListController.parties = partyService.getPartiesByUser(currentUser.uid);

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
      partyService.saveParty(waitListController.newParty, currentUser.uid);
      waitListController.newParty = {};
    };

    // Function to send a text message to a party.
    waitListController.sendTextMessage = function(party) {
      textMessageService.sendTextMessage(party, currentUser.uid, waitListController.parties);
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
          return authController.login();
        })
        .then(function(user) {
          return authService.sendWelcomeEmail(user.password.email);
        })
        .catch(function(error) {
          console.log(error);
        });
    };

    authController.login = function() {
      return authService.login(authController.user)
        .then(function(user) {
          $location.path('/waitlist');
          return user;
        })
        .catch(function(error) {
          console.log(error);
        });
    };

    authController.logout = function() {
      authService.logout();
      $location.path('/');
    };

  }]);