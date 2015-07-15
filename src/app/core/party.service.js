(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('partyService', partyService);

  partyService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function partyService($firebaseArray, firebaseDataService) {

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