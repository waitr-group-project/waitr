(function () {
  angular
    .module('waitrApp')
    .controller('restaSettingsCtrl', ['restaurantService', 'userService', '$scope', '$timeout',restaSettingsCtrl]);

  function restaSettingsCtrl (restaurantService, userService, $scope, $timeout) {
    var rsc = this;

    $timeout(function() {
      var currentUser = $scope.ac.currentUser;
      userService.currentUser(currentUser._id).then(function (currentUser) {
        var currentUserID = currentUser[0].restaurant_id;
        restaurantService.getCurrentRestaurants(currentUserID).then(function (restaurant) {
          var restaurant = restaurant[0];
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
          rsc.mondayOpen = restaurant.hours.monday.openTime;
          rsc.tuesdayOpen = restaurant.hours.tuesday.openTime;
          rsc.wednesdayOpen = restaurant.hours.wednesday.openTime;
          rsc.thursdayOpen = restaurant.hours.thursday.openTime;
          rsc.fridayOpen = restaurant.hours.friday.openTime;
          rsc.saturdayOpen = restaurant.hours.saturday.openTime;
          rsc.sundayOpen = restaurant.hours.sunday.openTime;
          rsc.mondayClose = restaurant.hours.monday.closeTime;
          rsc.tuesdayClose = restaurant.hours.tuesday.closeTime;
          rsc.wednesdayClose = restaurant.hours.wednesday.closeTime;
          rsc.thursdayClose = restaurant.hours.thursday.closeTime;
          rsc.fridayClose = restaurant.hours.friday.closeTime;
          rsc.saturdayClose = restaurant.hours.saturday.closeTime;
          rsc.sundayClose = restaurant.hours.sunday.closeTime;




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
            restaurantService.updateRestaurant(restaurant._id, restInfo);
          };

          rsc.updateRestaurantHours = function() {
            var hours = {
              monday: { openTime: rsc.mondayOpen, closeTime: rsc.mondayClose },
              tuesday: { openTime: rsc.tuesdayOpen, closeTime: rsc.tuesdayClose },
              wednesday: { openTime: rsc.wednesdayOpen, closeTime: rsc.wednesdayClose },
              thursday: { openTime: rsc.thursdayOpen, closeTime: rsc.thursdayClose },
              friday: { openTime: rsc.fridayOpen, closeTime: rsc.fridayClose},
              saturday: { openTime: rsc.saturdayOpen, closeTime: rsc.saturdayClose},
              sunday: { openTime: rsc.sundayOpen, closeTime: rsc.sundayClose}
            };
            restaurantService.updateRestaurant(restaurant._id, hours);
          };

          rsc.showHours = function() {
            console.log(rsc.hours );
            console.log('gettingit');
          };

        });
      });
    });
  }




})();
