(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService', 'userService','$stateParams', custRestaurantCtrl]);

  function custRestaurantCtrl (restaurantService, userService, $stateParams) {
    var crc = this;

    //var restaurantId = $stateParams.id;
    //console.log('this is the rest id', restaurantId);

    restaurantService.getCurrentRestaurants('56ce2b6c6910c73c351410e2').then(function (restaurant) {
      console.log('hey',restaurant[0]);
      crc.restaurant = restaurant[0];
    });

    userService.currentUser('56ce45fba2440fe4375e106c').then(function (user) {
      crc.currentUser = user;
    });

    //console.log('outside', crc.currentUser);



    crc.userAddingToQ = function () {
      console.log(crc.currentUser);
      //waitlistService.addAnonToWaitlist(newQPerson, rhc.dummyData).then(function(res) {
      //  console.log(res);
      //  $ionicHistory.nextViewOptions({
      //    disableBack: true
      //  });
      //
      //  $state.go("restaurant.home");
      //})
    }


  }

})();
