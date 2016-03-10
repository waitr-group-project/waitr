(function() {
  angular
    .module('waitrApp')
    .controller('restaAddMenuItemCtrl', ['$timeout', '$ionicPopup', '$scope', 'restaurantService', '$state', '$ionicHistory', restaAddMenuItemCtrl]);

  function restaAddMenuItemCtrl($timeout, $ionicPopup, $scope, restaurantService, $state, $ionicHistory) {
    var ramc = this;
    ramc.restaurant = $scope.rrc.restaurant;
    ramc.menuTitle = null;
    ramc.groupedMenu = _.groupBy(ramc.restaurant.menu, 'section');
    ramc.newMenuItem;

    ramc.goBack = function() {
      $ionicHistory.goBack();
    };

    // ramc.toggleSection = function(key) {
    //   if (key === ramc.menuTitle) {
    //     ramc.menuTitle = null;
    //   } else {
    //     ramc.menuTitle = key;
    //   }
    // };

    //ADD NEW ITEM
    ramc.updateRestaurantMenu = function () {
      if (ramc.newMenuItem.item === null || ramc.newMenuItem.price === null || ramc.newMenuItem.section === null) {
        return console.log('item not complete, menu not updated!')
      } else{
        restaurantService.updateRestaurantMenu(ramc.restaurant._id, ramc.newMenuItem)
          .then(function(){
            
          })
      }
    };
    // ramc.deleteItem = function(item) {
    //   // var itemToDelete = item;
    //   console.log(item); 
    //   $ionicPopup.confirm({
    //     template: "<h3>Are you sure you want to delete <input type='text' ng-model='ramc.itemToDelete'/>?",
    //     title: "Deleting item",
    //     // scope: $scope,
    //   })
    //   .then( function (res) {
    //     if (res) {
    //       restaurantService.deleteRestaurantMenuItem(ramc.restaurant._id, item)
    //       .then(function(result) {
    //         console.log(result);
    //         ramc.groupedMenu = _.groupBy(result.menu, 'section');
    //       })
    //     }
    //   })
    // }
  }

})();