(function () {
  angular
  .module('waitrApp')
  .controller('custHomeCtrl', ['restaurantService', custHomeCtrl]);

  function custHomeCtrl(restaurantService) {
    var chc = this;

    chc.reverse = false;

    restaurantService.getRestaurants()
      .then(function (restaurant) {
        chc.restaurantList = restaurant;
      });


  }

})();
