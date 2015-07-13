(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('party', party);

  party.$inject = ['$firebaseArray', 'firebaseData'];

  function party($firebaseArray, firebaseData) {

    var users = firebaseData.child('users');

    var service = {
      saveParty: saveParty,
      getPartiesByUser: getPartiesByUser
    };

    return service;

    function saveParty(party, uid) {
      users.child(uid).push(party);
    }

    function getPartiesByUser(uid) {
      return $firebaseArray(users.child(uid));
    }
  }

})();