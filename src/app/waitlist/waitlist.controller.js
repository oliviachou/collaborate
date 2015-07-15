(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

  WaitListController.$inject = ['$rootScope', 'partyService', 'textMessageService', 'currentUser'];

  function WaitListController($rootScope, partyService, textMessageService, currentUser) {
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
      textMessageService.sendTextMessage(party, vm.parties);
    }

    $rootScope.$on('logout', function() {
      vm.parties.$destroy();
    });
  }

})();