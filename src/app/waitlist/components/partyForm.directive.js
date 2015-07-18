(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('gzPartyForm', gzPartyForm);

  function gzPartyForm() {
    return {
      templateUrl: 'app/waitList/components/partyForm.html',
      restrict: 'E',
      controller: PartyFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        parties: '='
      }
    }
  }

  function PartyFormController() {
    var vm = this;

    vm.newParty = {
      name: '',
      phone: '',
      size: '',
      done: false,
      notified: false
    };
    vm.addParty = addParty;

    function addParty() {
      vm.parties.$add(vm.newParty);
      vm.newParty = {};
    }
  }

})();
