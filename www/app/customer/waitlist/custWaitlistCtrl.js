(function () {
  angular
    .module('waitrApp')
    .controller('custWaitlistCtrl', ['userService', 'restaurantService', custWaitlistCtrl]);

  function custWaitlistCtrl (userService, restaurantService) {
    var cwc = this;

    var currUser = '56ce45fba2440fe4375e106c';

    userService.currentUser(currUser).then(function (data) {
      cwc.user = data;
      var restaurantId = cwc.user[0].inWaitList.restaurant_id;
      console.log('rest id',restaurantId);
      restaurantService.getCurrentRestaurants(restaurantId).then(function (restaurant) {
        cwc.restaurant = restaurant[0];
        console.log('this is it', cwc.restaurant);
      });
    });



  }

})();
