'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$firebaseArray', function($firebaseArray) {
    var partiesReference = new Firebase('https://gz-angularfire-test.firebaseio.com/');

    this.parties = $firebaseArray(partiesReference);

    this.newParty = {
      name: '',
      phone: '',
      size: ''
    };

    this.saveParty = function() {
      this.parties.$add(this.newParty);
      this.newParty = {};
    };
  }]);