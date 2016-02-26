(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService', 'userService', 'waitlistService','$stateParams', '$ionicHistory', custRestaurantCtrl]);

  function custRestaurantCtrl (restaurantService, userService, waitlistService, $stateParams, $ionicHistory) {

    var crc = this;

    //var restaurantId = $stateParams.id;
    //console.log('this is the rest id', restaurantId);

    restaurantService.getRestaurant('56ce9b91f6326bb743e015f0').then(function (restaurant) {
      crc.restaurant = restaurant;
    });

    userService.currentUser('56ce45fba2440fe4375e106c').then(function (user) {
      crc.currentUser = user[0];
    });

    //console.log('outside', crc.currentUser);



    crc.userAddingToQ = function () {
      console.log('user adding to Q',crc.currentUser);
      waitlistService.addAnonToWaitlist(crc.currentUser, crc.restaurant).then(function(res) {
        console.log(res);
        $ionicHistory.nextViewOptions({
          disableBack: true
        });

        $state.go("restaurant.home");
      });
    };

    restaurantService.getRestaurant('56ce9b91f6326bb743e015f0').then(function(response) {
      crc.restaurantObj = response;
    });

    crc.goBack = function() {
       $ionicHistory.goBack();
    };

    crc.infoHoursToggle = true;

    crc.showOnClick = function(value) {
      crc.infoHoursToggle = value;
    };

  }

})();