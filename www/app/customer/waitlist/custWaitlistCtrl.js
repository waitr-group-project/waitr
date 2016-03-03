(function () {
  angular
    .module('waitrApp')
    .controller('custWaitlistCtrl', ['restaurantService', '$scope', custWaitlistCtrl]);

  function custWaitlistCtrl(restaurantService, $scope) {
    var cwc = this;

    cwc.currentUser = $scope.ccc.currentUser;

    restaurantService.getCurrentRestaurant(cwc.currentUser.inWaitList.restaurant_id).then(function (data) {
      cwc.restaurant = data[0];
      console.log('wait list rest', cwc.restaurant);
    })

  };

})();
