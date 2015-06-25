'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', [function() {
    this.parties = [];

    this.party = {
      name: '',
      phone: '',
      size: ''
    };

    this.saveParty = function() {
      this.parties.push(this.party);
      this.party = {};
    };
  }]);