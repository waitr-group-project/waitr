(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService', 'userService', 'waitlistService', '$stateParams', '$ionicHistory', '$state', '$timeout', '$scope', custRestaurantCtrl]);

  function custRestaurantCtrl(restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state, $timeout, $scope) {

    var crc = this;
    crc.infoHoursToggle = true;
    crc.restaurantId = $stateParams.restaurantId;
    crc.currentUser = $scope.ccc.currentUser;
      //console.log(crc.currentUser);
      
    //we need to get the user again just in case they get added to a list
    /*userService.currentUser(crc.currentUser._id).then(function(res) {
        crc.currentUser = res[0];
        //console.log(crc.currentUser);
    })*/

    restaurantService.getCurrentRestaurant(crc.restaurantId).then(function (restaurant) {
      crc.restaurant = restaurant[0];
    });
    waitlistService.getWaitlist(crc.restaurantId).then(function (res) {
      crc.customerEntries = res[0];
    });

    crc.userAddingToQ = function () {
      waitlistService.addAnonToWaitlist(crc.currentUser, crc.restaurant.waitlist_id).then(function (res) {
          console.log("res is: ", res);
        $ionicHistory.nextViewOptions({
          disableBack: true
        });

        $state.go("restaurant.home");
      });
    };
    crc.callTel = function (tel) {
      window.location.href = 'tel:' + tel;
    };


    crc.goBack = function () {
      $ionicHistory.goBack();
    };

    crc.infoHoursToggle = true;
    crc.showOnClick = function (value) {
      crc.infoHoursToggle = value;
    };
  }

})();
