(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantMenuCtrl', ['restaurantService', 'userService', 'waitlistService','$stateParams', '$ionicHistory', '$state', custRestaurantMenuCtrl]);

  function custRestaurantMenuCtrl (restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state) {

    var cmc = this;
    cmc.menuSection = '';

    var restaurantId = "56cf854d507ee272a9dc2dbb"
    console.log('this is restaurant id',restaurantId);

    restaurantService.getRestaurantMenu(restaurantId).then(function (restaurant) {
      console.log('hey',restaurant);
      cmc.restaurant = restaurant;
      cmc.restaurantMenu = restaurant.menu;
      console.log('menu', restaurant.menu);
    });
    cmc.goBack = function() {
       $ionicHistory.goBack();
    };

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