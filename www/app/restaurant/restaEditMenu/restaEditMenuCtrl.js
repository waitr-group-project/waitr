(function() {
  angular
    .module('waitrApp')
    .controller('restaEditMenuCtrl', ['$ionicPopup', '$scope', 'restaurantService', '$state', '$ionicHistory', restaEditMenuCtrl]);

  function restaEditMenuCtrl($ionicPopup, $scope, restaurantService, $state, $ionicHistory) {
    var remc = this;
    remc.restaurant = $scope.rrc.restaurant;
    remc.menuTitle = null;
    remc.groupedMenu = _.groupBy(remc.restaurant.menu, 'section');
    remc.newMenuItem;
    remc.newSection;

    remc.goBack = function() {
      $ionicHistory.goBack();
    };

    remc.toggleSection = function(key) {
      if (key === remc.menuTitle) {
        remc.menuTitle = null;
      } else {
        remc.menuTitle = key;
      }
    };

    //ADD NEW ITEM
    remc.updateRestaurantMenu = function() {
      $ionicPopup.confirm({
        templateUrl: './app/restaurant/restaEditMenu/restaAddMenuItem.html',
        scope: $scope
      })
        .then(function(res) {
          if (res) {
            if (remc.newMenuItem.section === 'new'){
              remc.newMenuItem.section = remc.newSection;
            }
            restaurantService.updateRestaurantMenu(remc.restaurant._id, remc.newMenuItem)
              .then(function(result) {
                console.log(result);
                remc.groupedMenu = _.groupBy(result.menu, 'section');
              })
          }
        })
    };

    remc.deleteItem = function(item) {
      $ionicPopup.confirm({
        template: "<h3>Are you sure?</h3>",
        title: "Deleting item",
        scope: $scope
      })
        .then(function(res) {
          if (res) {
            restaurantService.deleteRestaurantMenuItem(remc.restaurant._id, item)
              .then(function(result) {
                remc.groupedMenu = _.groupBy(result.menu, 'section');
              })
          }
        })
    }

  }

})();