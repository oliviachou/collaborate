(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitList', WaitList);

  WaitList.$inject = ['$rootScope', 'party', 'textMessageService', 'currentUser'];

  function WaitList($rootScope, party, textMessageService, currentUser) {
    var vm = this;

    vm.parties = party.getPartiesByUser(currentUser.uid);
    vm.newParty = {
      name: '',
      phone: '',
      size: '',
      done: false,
      notified: false
    };
    vm.saveParty = saveParty;
    vm.sendTextMessage = sendTextMessage;

    function saveParty() {
      party.saveParty(vm.newParty, currentUser.uid);
      vm.newParty = {};
    }

    function sendTextMessage(party) {
      textMessageService.sendTextMessage(party, currentUser.uid, vm.parties);
    }

    $rootScope.$on('logout', function() {
      vm.parties.$destroy();
    });
  }

})();