(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantCtrl', ['restaurantService', 'userService', 'waitlistService','$stateParams', '$ionicHistory', '$state', '$timeout', '$scope',custRestaurantCtrl]);

  function custRestaurantCtrl (restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state, $timeout, $scope) {

    var crc = this;

    var restaurantId = $stateParams.restaurantId;
    console.log('this is restaurant id',restaurantId);

    $timeout(function() {
      crc.currentUser = $scope.ac.currentUser;
      console.log('custRestaurant', crc.currentUser);

      restaurantService.getCurrentRestaurants(restaurantId).then(function (restaurant) {
        console.log('hey',restaurant[0]);
        crc.restaurant = restaurant[0];
      });
      restaurantService.getWaitlist(restaurantId).then(function(res) {
          crc.customerEntries = res[0];
      });

      var dummyData = {
        //MAKE SURE TO CHANGE REFERENCE IF YOU ARE TESTING
        _id: "56d479229d46dc9827032b71",
        restaurant_id: "56cf854d507ee272a9dc2dbb",
        quotedTime: 35
      };



    });


    //userService.currentUser('56ce45fba2440fe4375e106c').then(function (user) {
    //  crc.currentUser = user[0];
    //  console.log('hey ma',user[0])
    //});

    //console.log('outside', crc.currentUser);



    crc.goBack = function() {
       $ionicHistory.goBack();
    };

    crc.infoHoursToggle = true;

    crc.showOnClick = function(value) {
      crc.infoHoursToggle = value;
    };


  }

})();
