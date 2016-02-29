(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantMenuCtrl', ['restaurantService', 'userService', 'waitlistService','$stateParams', '$ionicHistory', '$state', custRestaurantMenuCtrl]);

  function custRestaurantMenuCtrl (restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state) {

    var cmc = this;
    cmc.menuSection = '';

    cmc.restaurantId = "56cf854d507ee272a9dc2dbb"

    restaurantService.getRestaurantMenu(cmc.restaurantId).then(function (restaurant) {
      console.log('restaurant',restaurant);
      cmc.restaurant = restaurant;
      cmc.restaurantMenu = restaurant.menu;
      console.log('menu', restaurant.menu);
    });
    cmc.goBack = function() {
       $ionicHistory.goBack();
    };

    
    //     $state.go("restaurant.home");




    // cmc.showSectionOnClick = function(value) {
    //   cmc.SectionToggle = value;
    // };


  }

})();