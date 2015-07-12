(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('firebaseData', firebaseData);

  firebaseData.$inject = ['FIREBASE_URL'];

  function firebaseData(FIREBASE_URL) {
    return new Firebase(FIREBASE_URL);
  }

})();