(function () {
  angular
  .module('waitrApp')
  .controller('custHomeCtrl', ['restaurantService', custHomeCtrl]);

  function custHomeCtrl(restaurantService) {
    var chc = this;

    restaurantService.getRestaurants()
      .then(function (restaurant) {
        chc.restaurantList = restaurant;
      });


  }

})();
