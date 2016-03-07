(function () {
  angular
  .module('waitrApp')
  .controller('custHomeCtrl', ['restaurantService', 'waitlistService',custHomeCtrl]);

  function custHomeCtrl(restaurantService, waitlistService) {
    var chc = this;

    restaurantService.getRestaurants()
      .then(function (restaurant) {
        console.log('look at rest',restaurant);
        chc.restaurantList = restaurant;
      });

    //waitlistService.getWaitList(chc.restaurantList.waitlist_id)
    //  .then(function (waitlist){
    //    console.log(waitlist);
    //    chc.waitlist = waitlist;
    //  });

  }

})();
