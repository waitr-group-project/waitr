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
    remc.updateRestaurantMenu = function () {
      if (remc.newMenuItem.item === null || remc.newMenuItem.price === null || remc.newMenuItem.desc === null || remc.newMenuItem.section === null) {
        return console.log('item not complete, menu not updated!')
      };
      restaurantService.updateRestaurantMenu(remc.restaurant._id, remc.newMenuItem)
        .then(function (restaurant) {
          $scope.rrc.restaurant.menu.push(remc.newMenuItem);
          $state.go('restaurant.editMenu');
        })
    };
    remc.deleteItem = function(itemToDelete) {
      remc.itemToDelete = itemToDelete; 
      $ionicPopup.confirm({
        template: "<h3>Are you sure you want to delete <input type='text' ng-model='remc.itemToDelete'/>?",
        title: "Deleting item",
        // scope: $scope,
      })
      .then( function (res) {
        if (res) {
          restaurantService.deleteRestaurantMenuItem(remc.restaurant._id, remc.itemToDelete._id)
          .then(function(result) {
            console.log(result.data.menu);
            remc.groupedMenu = _.groupBy(result.data.menu, 'section');
          })
        }
      })
    }
  }

})();