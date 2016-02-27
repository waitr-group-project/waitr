(function () {
  angular
    .module('waitrApp')
    .controller('restaSettingsCtrl', ['restaurantService',restaSettingsCtrl]);

  function restaSettingsCtrl (restaurantService) {
    var rsc = this;

    restaurantService.getRestaurants('56cf854d507ee272a9dc2dbb').then(function (restaurant) {
      var restaurant = restaurant[0];
      console.log('this is rest, ',restaurant);
      rsc.address = restaurant.addressLineOne;
      rsc.city = restaurant.city;
      rsc.state = restaurant.state;
      rsc.zipcode = restaurant.zipcode;
    });
    rsc.updateRestaurant = function (address, city, state, zipcode) {
      var restInfo = {
        address: address,
        city: city,
        state: state,
        zipcode: zipcode
      };
      console.log(restInfo);
    };

    rsc.hours = {
      monday: { openTime: rsc.mondayOpen, closeTime: rsc.mondayClose },
      tuesday: { openTime: rsc.tuesdayOpen, closeTime: rsc.tuesdayClose },
      wednesday: { openTime: rsc.wednesdayOpen, closeTime: rsc.wednesdayClose },
      thursday: { openTime: rsc.thursdayOpen, closeTime: rsc.thursdayClose },
      friday: { openTime: rsc.fridayOpen, closeTime: rsc.fridayClose},
      saturday: { openTime: rsc.saturdayOpen, closeTime: rsc.saturdayClose},
      sunday: { openTime: rsc.sundayOpen, closeTime: rsc.sundayClose}
    };
    rsc.showHours = function() {
      console.log(rsc.hours);
      console.log('gettingit');
    };
  }




})();
