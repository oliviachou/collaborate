(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('party', party);

  party.$inject = ['$firebaseArray', 'firebaseData'];

  function party($firebaseArray, firebaseData) {

    var service = {
      saveParty: saveParty,
      getPartiesByUser: getPartiesByUser
    };

    return service;

    ////////////

    function saveParty(party, uid) {
      firebaseData.users.child(uid).push(party);
    }

    function getPartiesByUser(uid) {
      return $firebaseArray(firebaseData.users.child(uid));
    }
  }

})();