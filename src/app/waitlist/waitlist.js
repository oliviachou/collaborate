(function() {
  'use strict';

  angular
    .module('myApp.waitList')
    .controller('WaitList', WaitList);

  function WaitList() {
    console.log('Inside the WaitList controller.');
  }

})();