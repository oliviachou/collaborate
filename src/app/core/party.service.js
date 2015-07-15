(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('party', party);

  party.$inject = ['$firebaseArray', 'firebaseDataService'];

  function party($firebaseArray, firebaseDataService) {

    var service = {
      saveParty: saveParty,
      getPartiesByUser: getPartiesByUser
    };

    return service;

    ////////////

    function saveParty(party, uid) {
      firebaseDataService.users.child(uid).push(party);
    }

    function getPartiesByUser(uid) {
      return $firebaseArray(firebaseDataService.users.child(uid));
    }
  }

})();