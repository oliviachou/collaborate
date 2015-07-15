(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitlistController', WaitlistController);

  WaitlistController.$inject = ['$rootScope', 'partyService', 'textMessageService', 'currentUser'];

  function WaitlistController($rootScope, partyService, textMessageService, currentUser) {
    var vm = this;

    vm.parties = partyService.getPartiesByUser(currentUser.uid);
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
      partyService.saveParty(vm.newParty, currentUser.uid);
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