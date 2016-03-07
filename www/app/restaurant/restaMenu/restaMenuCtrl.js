(function () {
  angular
    .module('waitrApp')
    .controller('restaMenuCtrl', ['$scope', '$ionicHistory', restaMenuCtrl]);

  function restaMenuCtrl($scope, $ionicHistory) {
    var rmc = this;
    rmc.menuTitle = null;
<<<<<<< HEAD
    rmc.restaurant = $scope.rrc.restaurant;
    rmc.groupedMenu = _.groupBy(rmc.restaurant.menu, 'section');

    rmc.goBack = function () {
      $ionicHistory.goBack();
    };

    rmc.toggleSection = function (key) {
      if (key === rmc.menuTitle) {
        rmc.menuTitle = null;
      } else {
        rmc.menuTitle = key;
      }
=======
    rmc.menuContent = rmc.groupedMenu;

    restaurantService.getCurrentRestaurant(rmc.restaurantId)
    .then(function (restaurant) {
        // console.log('restaurant',restaurant);
        rmc.restaurant = restaurant;
        // rmc.restaurantMenu = restaurant.menu;
        // console.log('menu', restaurant.menu);
        rmc.groupedMenu = _.groupBy(restaurant.menu, 'section');
        return console.log(rmc.groupedMenu);
    });
    rmc.goBack = function() {
       $ionicHistory.goBack();
    };
    // rmc.toggleSection = function(key, value) {
    //     rmc.menuTitle = key;
    //     rmc.menuContent = value;
    //     return console.log(key, value);
    // }
    //toggling accordion
    rmc.toggleSection = function(key) {
        if(key === rmc.menuTitle){
            rmc.menuTitle = null;
        } else{
            rmc.menuTitle = key;
        }
    };

    rmc.toggleArrow = function(key) {
        if(key === null){
            rmc.arrow = 'ion-ios-arrow-forward'
        } else {
            rmc.arrow = 'ion-ios-arrow-down'
        }
>>>>>>> dev
    };
  }
})();

