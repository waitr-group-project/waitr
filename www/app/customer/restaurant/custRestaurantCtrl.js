(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService', '$stateParams', '$ionicHistory',  custRestaurantCtrl]);

  function custRestaurantCtrl (restaurantService, $stateParams, $ionicHistory) {
    var crc = this;


    restaurantService.getRestaurant('56ce9b91f6326bb743e015f0').then(function(response) {
      crc.restaurantObj = response;
    });

    crc.goBack = function() {
       $ionicHistory.goBack();
    };

    crc.infoHoursToggle = true;

    crc.showOnClick = function(value) {
      crc.infoHoursToggle = value;
    };


  }

})();
