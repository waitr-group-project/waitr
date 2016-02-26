(function () {
  angular
    .module('waitrApp')
    .controller('restaProfileCtrl', ['restaurantService', '$stateParams', '$timeout', '$scope', 'userService',restaProfileCtrl]);

  function restaProfileCtrl (restaurantService, $stateParams, $timeout, $scope, userService) {
    var rpc = this;

      restaurantService.getRestaurant('56ce9b91f6326bb743e015f0').then(function(response) {
        rpc.restaurantObj = response;
      });

    $timeout(function() {
      currentUser = $scope.ac.currentUser;
      //console.log('custHome', currentRestaurant);
      userService.currentUser(currentUser.id).then(function (currentUser) {
        console.log(currentUser);
        var currentUserID = currentUser[0].restaurant_id;
        console.log('rest id', currentUserID);
        restaurantService.getCurrentRestaurants(currentUserID).then(function (restaurant) {
          rpc.restaurant = restaurant[0];
          console.log('restaurant profile',rpc.restaurant);
        });
      })
    });

      rpc.infoHoursToggle = true;

      rpc.showOnClick = function(value) {
        rpc.infoHoursToggle = value;
      };






  }

})();
