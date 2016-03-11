(function () {
  angular
  .module('waitrApp')
  .controller('custHomeCtrl', ['restaurantService', '$timeout', custHomeCtrl]);

  function custHomeCtrl(restaurantService, $timeout) {
    var chc = this;

    chc.reverse = false;

    restaurantService.getRestaurants()
      .then(function (restaurant) {
        $timeout(function() {
          chc.restaurantList = restaurant;
        }, 1000);
      });


  }

})();
