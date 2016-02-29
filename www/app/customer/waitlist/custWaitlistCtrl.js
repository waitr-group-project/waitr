(function () {
  angular
    .module('waitrApp')
    .controller('custWaitlistCtrl', ['userService', 'restaurantService', '$timeout', '$scope', 'restaurantService', custWaitlistCtrl]);

  function custWaitlistCtrl (userService, restaurantService, $timeout, $scope, restaurantService) {
    var cwc = this;

    $timeout(function() {
      var currentUser = $scope.ac.currentUser;
      userService.currentUser(currentUser._id).then(function (user){
        cwc.user = user[0];
        console.log('this is wait user',cwc.user);
        restaurantService.getCurrentRestaurants(user[0].inWaitList.restaurant_id).then(function (data) {
          cwc.restaurant = data[0];
          console.log('wait list rest', cwc.restaurant);
        })
      });
    });

    //var currUser = '56ce45fba2440fe4375e106c';
    //
    //userService.currentUser(currUser).then(function (data) {
    //  cwc.user = data;
    //  var restaurantId = cwc.user[0].inWaitList.restaurant_id;
    //  console.log('rest id',restaurantId);
    //  restaurantService.getCurrentRestaurants(restaurantId).then(function (restaurant) {
    //    cwc.restaurant = restaurant[0];
    //    console.log('this is it', cwc.restaurant);
    //  });
    //});
  }

})();
