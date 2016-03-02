(function () {
  angular
    .module('waitrApp')
    .controller('restaRestaurantCtrl', ['restaurantService','$timeout', '$scope',restaAdminCtrl]);

  function restaAdminCtrl (restaurantService, $timeout, $scope) {
    var rrc = this;

      $timeout(function() {
        var currentRestID = $scope.ac.currentUser.restaurant_id;
          restaurantService.getCurrentRestaurants(currentRestID).then(function (restaurant) {
            rrc.restaurant = restaurant[0];
          });
      });

    }

})();
