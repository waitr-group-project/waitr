(function () {
  angular
    .module('waitrApp')
    .controller('restaMenuCtrl', ['restaurantService', 'userService', 'waitlistService','$stateParams', '$ionicHistory', '$state', '$ionicSideMenuDelegate', restaMenuCtrl]);

  function restaMenuCtrl (restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $ionicSideMenuDelegate, $state) {
    var rmc = this;
    // rmc.menuSection = [];
    rmc.restaurantId = "56cf854d507ee272a9dc2dbb";
    rmc.menuTitle= 'PICK A SECTION';
    rmc.menuContent = rmc.groupedMenu;
    restaurantService.getRestaurantMenu(rmc.restaurantId).then(function (restaurant) {
        console.log('restaurant',restaurant);
        rmc.restaurant = restaurant;
        // rmc.restaurantMenu = restaurant.menu;
        console.log('menu', restaurant.menu);
        rmc.groupedMenu = _.groupBy(restaurant.menu, 'section');
        return console.log(rmc.groupedMenu);
    });
    rmc.goBack = function() {
       $ionicHistory.goBack();
    };
    rmc.toggleSection = function(key, value) {
        rmc.menuTitle = key;
        rmc.menuContent = value;
        return console.log(key, value)
    }
    
    
    //     $state.go("restaurant.home");
    //   })
    // };

    // rmc.SectionToggle = true;

    // rmc.showSectionOnClick = function(value) {
    //   rmc.SectionToggle = value;
    // };

  }

})();

// <button ng-click="rmc.toggleRight()" showBar(rmc.show) style="color:white" class="button button-icon icon ion-navicon"></button>
