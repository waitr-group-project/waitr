(function () {
  angular
    .module('waitrApp')
    .controller('restaHomeCtrl', [restaHomeCtrl]);

  function restaHomeCtrl () {
    var rhc = this;

    rhc.customerEntries = [];
      
    rhc.addPersonToQ = function(newQPerson) {
        console.log(newQPerson);
    }
  }

})();
