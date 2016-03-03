(function () {
    angular
        .module('waitrApp')
        .controller('restaEditMenuCtrl', ['$scope', 'restaurantService', '$state', '$ionicHistory', restaEditMenuCtrl]);

    function restaEditMenuCtrl($scope, restaurantService, $state, $ionicHistory) {
        var remc = this;
        remc.restaurant = $scope.rrc.restaurant;
        remc.menuTitle = null;
        remc.groupedMenu = _.groupBy(remc.restaurant.menu, 'section');
        remc.newMenuItem;

        remc.goBack = function () {
            $ionicHistory.goBack();
        };

        remc.toggleSection = function (key) {
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
    }

})();