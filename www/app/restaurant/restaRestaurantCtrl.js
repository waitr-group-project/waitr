(function () {
  angular
    .module('waitrApp')
    .controller('restaRestaurantCtrl', ['userService','restaurantService','$timeout', '$scope',restaAdminCtrl]);

  function restaAdminCtrl (userService, restaurantService, $timeout, $scope) {
    var rrc = this;


    $timeout(function() {
      currentUser = $scope.ac.currentUser;
      //console.log('custHome', currentRestaurant);
      userService.currentUser(currentUser.id).then(function (currentUser) {
        //console.log(currentUser);
        var currentUserID = currentUser[0].restaurant_id;
        //console.log('rest id', currentUserID);
        restaurantService.getCurrentRestaurants(currentUserID).then(function (restaurant) {
          rrc.restaurant = restaurant[0];
          //console.log(rrc.restaurant);
        });
      })
    });





  }

})();
