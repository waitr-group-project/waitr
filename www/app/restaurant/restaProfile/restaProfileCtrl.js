(function () {
  angular
    .module('waitrApp')
    .controller('restaProfileCtrl', ['$timeout','restaurantService', '$scope', 'userService', restaProfileCtrl]);

  function restaProfileCtrl ($timeout, restaurantService, $scope, userService) {
      var rpc = this;

      //restaurantService.getRestaurant('56ce9b91f6326bb743e015f0').then(function(response) {
      //  rpc.restaurantObj = response;
      //});

      $timeout(function() {
        currentUser = $scope.ac.currentUser;
        //console.log('resta profile',currentUser);
        userService.currentUser(currentUser._id).then(function (currentUser) {
          var currentUserID = currentUser[0].restaurant_id;
          restaurantService.getCurrentRestaurants(currentUserID).then(function (restaurant) {
            rpc.restaurant = restaurant[0];
          });
        });
      });

      rpc.infoHoursToggle = true;

      rpc.showOnClick = function(value) {
        rpc.infoHoursToggle = value;
      };

  }

})();
