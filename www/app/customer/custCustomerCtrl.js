(function () {
  angular
    .module('waitrApp')
    .controller('custCustomerCtrl', ['$state', 'currentUser', 'userService', '$timeout', '$scope', custCustomerCtrl]);

  function custCustomerCtrl($state,currentUser, userService, $timeout, $scope) {

    var ccc = this;
    ccc.currentUser = currentUser;
  }
})();
