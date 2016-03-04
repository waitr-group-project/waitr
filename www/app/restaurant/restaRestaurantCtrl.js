(function () {
  angular
    .module('waitrApp')
    .controller('restaRestaurantCtrl', ['restaurantInfo', 'restaurantService', '$timeout', '$scope', restaAdminCtrl]);

  function restaAdminCtrl(restaurantInfo, restaurantService, $timeout, $scope) {
    var rrc = this;
    rrc.currentUser = restaurantInfo.currentUser;
    rrc.restaurant = restaurantInfo.restaurant[0];

  }

})();
