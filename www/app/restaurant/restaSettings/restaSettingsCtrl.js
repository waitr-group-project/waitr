(function () {
  angular
    .module('waitrApp')
    .controller('restaSettingsCtrl', ['restaurantService', 'userService', '$scope', '$timeout',restaSettingsCtrl]);

  function restaSettingsCtrl (restaurantService, userService, $scope, $timeout) {
    var rsc = this;

    $timeout(function() {
      currentUser = $scope.ac.currentUser;
      //console.log('custHome', currentRestaurant);
      userService.currentUser(currentUser.id).then(function (currentUser) {
        console.log(currentUser);
        var currentUserID = currentUser[0].restaurant_id;
        console.log('rest id', currentUserID);
        restaurantService.getCurrentRestaurants(currentUserID).then(function (restaurant) {
          var restaurant = restaurant[0];
          //console.log('this is rest, ',restaurant);
          rsc.name = restaurant.restaurantName;
          rsc.shortDescription = restaurant.shortDescription;
          rsc.description = restaurant.description;
          rsc.restaurantImage = restaurant.restaurantImage;
          rsc.restaurantIcon = restaurant.restaurantIcon;
          rsc.foodType = restaurant.foodType;
          rsc.address = restaurant.addressLineOne;
          rsc.city = restaurant.city;
          rsc.state = restaurant.state;
          rsc.zipcode = restaurant.zipcode;
        });
      })
    });


    rsc.updateRestaurant = function (name, shortDescription, description, foodType, restaurantImage, restaurantIcon) {
      var restInfo = {
        name: name,
        shortDescription: shortDescription,
        description: description,
        foodType: foodType,
        restaurantImage: restaurantImage,
        restaurantIcon: restaurantIcon
      };
      console.log(restInfo);
    }
  }

})();
