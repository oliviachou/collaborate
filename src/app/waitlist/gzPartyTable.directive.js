(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('gzPartyTable', gzPartyTable);

  function gzPartyTable() {
    return {
      templateUrl: 'app/waitList/gzPartyTable.html',
      restrict: 'E',
      controller: PartyTableController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        parties: '='
      }
    }
  }

  PartyTableController.$inject = ['textMessageService'];

  function PartyTableController(textMessageService) {
    var vm = this;

    vm.sendTextMessage = sendTextMessage;

    function sendTextMessage(party) {
      textMessageService.sendTextMessage(party, vm.parties);
    }

  }

})();
