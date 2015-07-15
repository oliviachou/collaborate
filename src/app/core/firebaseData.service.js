(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('firebaseData', firebaseData);

  firebaseData.$inject = ['FIREBASE_URL'];

  function firebaseData(FIREBASE_URL  ) {
    var root = new Firebase(FIREBASE_URL);

    var service = {
      root: root,
      users: root.child('users'),
      emails: root.child('emails'),
      textMessages: root.child('textMessages')
    };

    return service;
  }

})();