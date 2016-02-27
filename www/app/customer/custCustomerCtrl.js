(function () {
  angular
    .module('waitrApp')
    .controller('custCustomerCtrl', ['$timeout', '$scope', custCustomerCtrl]);

  function custCustomerCtrl ($timeout, $scope) {
    var ccc = this;

    $timeout(function() {
      ccc.currentUser = $scope.ac.currentUser;
      console.log('custHome', ccc.currentUser);
    });

  }

})();
