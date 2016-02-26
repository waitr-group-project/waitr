(function () {
  angular
    .module('waitrApp')
    .controller('custHomeCtrl', ['restaurantService', custHomeCtrl]);

  function custHomeCtrl (restaurantService, AppCtrl) {
    var chc = this;

    restaurantService.getRestaurants().then(function (restaurant) {
      chc.restaurantList = restaurant;
    });

    user = AppCtrl.currentUser;

    console.log(user);
  }

})();
