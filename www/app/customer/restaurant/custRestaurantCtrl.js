(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService','$stateParams', custRestaurantCtrl]);

  function custRestaurantCtrl (restaurantService, $stateParams) {
    var crc = this;

    //var restaurantId = $stateParams.id;
    //console.log('this is the rest id', restaurantId);

    restaurantService.getCurrentRestaurants('56ce2b6c6910c73c351410e2').then(function (restaurant) {
      console.log('hey',restaurant[0]);
      crc.restaurant = restaurant[0];
    });


  }

})();
