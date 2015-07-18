(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('partyService', partyService);

  partyService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function partyService($firebaseArray, firebaseDataService) {

    var service = {
      getPartiesByUser: getPartiesByUser
    };

    return service;

    ////////////

    function getPartiesByUser(uid) {
      return $firebaseArray(firebaseDataService.users.child(uid));
    }
  }

})();