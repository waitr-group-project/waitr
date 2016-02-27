(function () {
  angular
    .module('waitrApp')
    .controller('restaSettingsCtrl', ['restaurantService', 'userService', '$scope', '$timeout',restaSettingsCtrl]);

  function restaSettingsCtrl (restaurantService, userService, $scope, $timeout) {
    var rsc = this;

    $timeout(function() {
      var currentUser = $scope.ac.currentUser;
      userService.currentUser(currentUser._id).then(function (currentUser) {
        var restaurantID = currentUser[0].restaurant_id;
        restaurantService.getCurrentRestaurants(restaurantID).then(function (restaurant) {
          var restaurant = restaurant[0];
          //console.log(restaurant);
          rsc.name = restaurant.restaurantName;
          rsc.shortDescription = restaurant.shortDescription;
          rsc.description = restaurant.description;
          rsc.restaurantImage = restaurant.restaurantImage;
          rsc.restaurantIcon = restaurant.restaurantIcon;
          rsc.foodType = restaurant.foodType;
          rsc.addressLineOne = restaurant.addressLineOne;
          rsc.city = restaurant.city;
          rsc.state = restaurant.state;
          rsc.zipcode = restaurant.zipcode;

          rsc.updateRestaurantInfo = function (shortDescription, description, foodType, restaurantImage, restaurantIcon) {
            var restInfo = {
              shortDescription: shortDescription,
              description: description,
              foodType: foodType,
              restaurantImage: restaurantImage,
              restaurantIcon: restaurantIcon
            };
            restaurantService.updateRestaurant(restaurant._id, restInfo);
          };

          rsc.updateRestaurantContact = function (name, addressLineOne, city, state, zipcode) {
            var restInfo = {
              restaurantName: name,
              addressLineOne: addressLineOne,
              city: city,
              state: state,
              zipcode: zipcode
            };
            console.log('hello', restInfo);
            restaurantService.updateRestaurant(restaurant._id, restInfo);
          };
        });
      });
    });
  }

})();
