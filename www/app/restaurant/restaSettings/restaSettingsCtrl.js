(function () {
  angular
    .module('waitrApp')
    .controller('restaSettingsCtrl', ['restaurantService', '$ionicHistory', 'userService', '$scope', '$timeout', '$filter',restaSettingsCtrl])
    .directive('formattedTime', function ($filter) {

  return {
    require: '?ngModel',
    link: function(scope, elem, attr, ngModel) {
        if( !ngModel )
            return;
        if( attr.type !== 'time' )
            return;

        ngModel.$formatters.unshift(function(value) {
            return value.replace(/:[0-9]+.[0-9]+$/, '');
        });
    }

  };

});

  function restaSettingsCtrl (restaurantService, $ionicHistory, userService, $scope, $timeout, $filter) {
    var rsc = this;

    $timeout(function() {
      var currentUserID = $scope.ac.currentUser.restaurant_id;
        restaurantService.getCurrentRestaurants(currentUserID).then(function (restaurant) {
          rsc.restaurant = restaurant[0];
          //for editing menu
          rsc.menuTitle = null;
          rsc.menuContent = rsc.groupedMenu;
          rsc.groupedMenu = _.groupBy(restaurant[0].menu, 'section');
          console.log(rsc.groupedMenu)
          //for editing hours
          rsc.restaurant.hours.monday.openTime = new Date(rsc.restaurant.hours.monday.openTime);
          rsc.restaurant.hours.monday.closeTime = new Date(rsc.restaurant.hours.monday.closeTime);
          rsc.restaurant.hours.tuesday.openTime = new Date(rsc.restaurant.hours.tuesday.openTime);
          rsc.restaurant.hours.tuesday.closeTime = new Date(rsc.restaurant.hours.tuesday.closeTime);
          rsc.restaurant.hours.wednesday.openTime = new Date(rsc.restaurant.hours.wednesday.openTime);
          rsc.restaurant.hours.wednesday.closeTime = new Date(rsc.restaurant.hours.wednesday.closeTime);
          rsc.restaurant.hours.thursday.openTime = new Date(rsc.restaurant.hours.thursday.openTime);
          rsc.restaurant.hours.thursday.closeTime = new Date(rsc.restaurant.hours.thursday.closeTime);
          rsc.restaurant.hours.friday.openTime = new Date(rsc.restaurant.hours.friday.openTime);
          rsc.restaurant.hours.friday.closeTime = new Date(rsc.restaurant.hours.friday.closeTime);
          rsc.restaurant.hours.saturday.openTime = new Date(rsc.restaurant.hours.saturday.openTime);
          rsc.restaurant.hours.saturday.closeTime = new Date(rsc.restaurant.hours.saturday.closeTime);
          rsc.restaurant.hours.sunday.openTime = new Date(rsc.restaurant.hours.sunday.openTime);
          rsc.restaurant.hours.sunday.closeTime = new Date(rsc.restaurant.hours.sunday.closeTime);

          rsc.updateRestaurantInfo = function (restaurant) {
            restaurantService.updateRestaurant(rsc.restaurant._id, restaurant);
          };
          rsc.updateRestaurantContact = function (restaurant) {
            restaurantService.updateRestaurant(rsc.restaurant._id, restaurant);
          };

          rsc.updateRestaurantHours = function(restaurant) {
            restaurantService.updateRestaurant(rsc.restaurant._id, restaurant).then(function(response) {
              console.log(response);
            });

          };

          });
          
          //edit menu functions
          rsc.goBack = function() {
            $ionicHistory.goBack();
            };
            //toggling accordion
          rsc.toggleSection = function(key) {
                if(key === rsc.menuTitle){
                    rsc.menuTitle = null;
                } else{
                    rsc.menuTitle = key;
                }
            };
            
            rsc.toggleArrow = function(key) {
                if(key === null){
                    rsc.arrow = 'ion-ios-arrow-forward'
                } else {
                    rsc.arrow = 'ion-ios-arrow-down'
                }
            };
            //end of edit menu functions
    });
  }
})();
