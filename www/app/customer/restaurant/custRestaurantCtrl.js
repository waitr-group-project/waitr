(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService', 'userService', 'waitlistService','$stateParams', '$ionicHistory', '$state', '$timeout', '$scope',custRestaurantCtrl]);

  function custRestaurantCtrl (restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state, $timeout, $scope) {

    var crc = this;

    $timeout(function() {
      crc.currentUser = $scope.ac.currentUser;
      console.log('custRestaurant', crc.currentUser);

      restaurantService.getCurrentRestaurants(restaurantId).then(function (restaurant) {
        console.log('hey',restaurant[0]);
        crc.restaurant = restaurant[0];
      });


      crc.userAddingToQ = function () {
        //console.log('user adding to Q',crc.currentUser);
        waitlistService.addAnonToWaitlist(crc.currentUser, crc.restaurant.waitlist_id).then(function(res) {
          //console.log(res);
          $ionicHistory.nextViewOptions({
            disableBack: true
          });

          $state.go("restaurant.home");
        });
      };
    });

    var restaurantId = $stateParams.restaurantId;
    console.log('this is restaurant id',restaurantId);


    //userService.currentUser('56ce45fba2440fe4375e106c').then(function (user) {
    //  crc.currentUser = user[0];
    //  console.log('hey ma',user[0])
    //});

    //console.log('outside', crc.currentUser);



    //restaurantService.getRestaurant('56ce9b91f6326bb743e015f0').then(function(response) {
    //  crc.restaurantObj = response;
    //});

    crc.goBack = function() {
       $ionicHistory.goBack();
    };

    crc.infoHoursToggle = true;

    crc.showOnClick = function(value) {
      crc.infoHoursToggle = value;
    };


  }

})();
