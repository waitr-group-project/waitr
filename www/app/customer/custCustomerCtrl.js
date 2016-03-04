(function () {
  angular
    .module('waitrApp')
    .controller('custCustomerCtrl', ['currentUser', 'userService', '$timeout', '$scope', custCustomerCtrl]);

  function custCustomerCtrl(currentUser, userService, $timeout, $scope) {

    var ccc = this;
    ccc.currentUser = currentUser;

  }
})();
