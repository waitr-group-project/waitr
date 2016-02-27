(function () {
  angular
    .module('waitrApp')
    .controller('custHomeCtrl', ['restaurantService', '$scope', '$timeout', custHomeCtrl]);

  function custHomeCtrl (restaurantService, $scope, $timeout) {
    var chc = this;

    restaurantService.getRestaurants().then(function (restaurant) {
      chc.restaurantList = restaurant;
    });

    $timeout(function() {
      chc.currentUser = $scope.ac.currentUser;
      console.log('custHome', currentUser);
    });



  }

})();
