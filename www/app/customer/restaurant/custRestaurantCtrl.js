(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService', 'userService', 'waitlistService', '$stateParams', '$ionicHistory', '$state', '$timeout', '$scope', custRestaurantCtrl]);

  function custRestaurantCtrl(restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state, $timeout, $scope) {

    var crc = this;
    crc.infoHoursToggle = true;
    crc.restaurantId = $stateParams.restaurantId;
    crc.currentUser = $scope.ccc.currentUser;


    restaurantService.getCurrentRestaurant(crc.restaurantId).then(function (restaurant) {
      crc.restaurant = restaurant[0];
    });
    waitlistService.getWaitlist(crc.restaurantId).then(function (res) {
      crc.customerEntries = res[0];
    });

    crc.userAddingToQ = function () {
      waitlistService.addAnonToWaitlist(crc.currentUser, crc.restaurant.waitlist_id).then(function (res) {
        $ionicHistory.nextViewOptions({
          disableBack: true
        });

        $state.go("restaurant.home");
      });
    };

    crc.goBack = function () {
      $ionicHistory.goBack();
    };


    crc.showOnClick = function (value) {
      crc.infoHoursToggle = value;
    };
  }

})();