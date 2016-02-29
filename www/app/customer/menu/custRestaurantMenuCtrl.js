(function () {
  angular
    .module('waitrApp')
    .controller('custRestaurantMenuCtrl', ['restaurantService', 'userService', 'waitlistService','$stateParams', '$ionicHistory', '$state', '$ionicSideMenuDelegate', custRestaurantMenuCtrl]);

  function custRestaurantMenuCtrl (restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state, $ionicSideMenuDelegate) {
    var cmc = this;
    // cmc.menuSection = [];
    cmc.restaurantId = "56cf854d507ee272a9dc2dbb";
    cmc.menuTitle= 'PICK A SECTION';
    cmc.menuContent = cmc.groupedMenu;
    restaurantService.getRestaurantMenu(cmc.restaurantId).then(function (restaurant) {
        console.log('restaurant',restaurant);
        cmc.restaurant = restaurant;
        // cmc.restaurantMenu = restaurant.menu;
        console.log('menu', restaurant.menu);
        cmc.groupedMenu = _.groupBy(restaurant.menu, 'section');
        return console.log(cmc.groupedMenu);
    });
    cmc.goBack = function() {
       $ionicHistory.goBack();
    };
    cmc.toggleSection = function(key, value) {
        cmc.menuTitle = key;
        cmc.menuContent = value;
        return console.log(key, value)
    }
    
    
    //     $state.go("restaurant.home");
    //   })
    // };

    // cmc.SectionToggle = true;

    // cmc.showSectionOnClick = function(value) {
    //   cmc.SectionToggle = value;
    // };

  }

})();

// <button ng-click="cmc.toggleRight()" showBar(cmc.show) style="color:white" class="button button-icon icon ion-navicon"></button>
