(function () {
  angular
    .module('waitrApp')
    .controller('custHomeCtrl', ['restaurantService', custHomeCtrl]);

  function custHomeCtrl (restaurantService) {
    var chc = this;

    restaurantService.getRestaurants().then(function (restaurant) {
      console.log('hey',restaurant);
      chc.restaurantList = restaurant;
    });

  }

})();
