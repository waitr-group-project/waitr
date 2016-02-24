(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService',custRestaurantCtrl]);

  function custRestaurantCtrl (restaurantService) {
    var crc = this;

    restaurantService.getRestaurants().then(function (restaurant) {
      console.log('hey',restaurant);
      crc.restaurantList = restaurant;
    });


  }

})();
