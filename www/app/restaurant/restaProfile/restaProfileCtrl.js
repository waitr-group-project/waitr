(function () {
  angular
    .module('waitrApp')
    .controller('restaProfileCtrl', ['waitlistService', '$scope', 'userService', restaProfileCtrl]);

  function restaProfileCtrl(waitlistService, $scope, userService) {

    var rpc = this;
    rpc.infoHoursToggle = true;
    rpc.currentUser = $scope.rrc.currentUser;
    rpc.restaurant = $scope.rrc.restaurant;

    waitlistService.getWaitlist(rpc.currentUser.restaurant_id).then(function (res) {
      rpc.customerEntries = res[0];
    });

    rpc.callTel = function (tel) {
      window.location.href = 'tel:' + tel;
    };

    rpc.infoHoursToggle = true;
    rpc.showOnClick = function (value) {
      rpc.infoHoursToggle = value;
    };
  };

})();
