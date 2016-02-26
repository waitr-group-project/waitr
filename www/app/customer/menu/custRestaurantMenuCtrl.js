(function () {
  angular
    .module('waitrApp')
    .controller('custMenuCtrl', ['restaurantService', 'userService', 'waitlistService','$stateParams', '$ionicHistory', '$state',custMenuCtrl]);

  function custMenuCtrl (restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state) {

    var cmc = this;

    var restaurantId = $stateParams.restaurantId;
    console.log('this is restaurant id',restaurantId);

    restaurantService.getRestaurantMenu(restaurantId).then(function (restaurant) {
      console.log('hey',restaurant[0].menu[0]);
      cmc.restaurant = restaurant[0].menu[0];
    });

    //userService.currentUser('56ce45fba2440fe4375e106c').then(function (user) {
    //  cmc.currentUser = user[0];
    //  console.log('hey ma',user[0])
    //});

    //console.log('outside', cmc.currentUser);

    // cmc.userAddingToQ = function () {
    //   //console.log('user adding to Q',cmc.currentUser);
    //   waitlistService.addAnonToWaitlist(cmc.currentUser, cmc.restaurant.waitlist_id).then(function(res) {
    //     //console.log(res);
    //     $ionicHistory.nextViewOptions({
    //       disableBack: true
    //     });

    //     $state.go("restaurant.home");
    //   })
    // };

    //restaurantService.getRestaurant('56ce9b91f6326bb743e015f0').then(function(response) {
    //  cmc.restaurantObj = response;
    //});

    // cmc.goBack = function() {
    //    $ionicHistory.goBack();
    // };

    // cmc.infoHoursToggle = true;

    // cmc.showOnClick = function(value) {
    //   cmc.infoHoursToggle = value;
    // };


  }

})();