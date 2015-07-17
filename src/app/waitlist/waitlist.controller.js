(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

  WaitListController.$inject = ['$rootScope', 'partyService', 'textMessageService', 'user'];

  function WaitListController($rootScope, partyService, textMessageService, user) {
    var vm = this;

    vm.parties = partyService.getPartiesByUser(user.uid);
    vm.newParty = {
      name: '',
      phone: '',
      size: '',
      done: false,
      notified: false
    };
    vm.saveParty = saveParty;

    function saveParty() {
      partyService.saveParty(vm.newParty, user.uid);
      vm.newParty = {};
    }

    $rootScope.$on('logout', function() {
      vm.parties.$destroy();
    });
  }

})();
