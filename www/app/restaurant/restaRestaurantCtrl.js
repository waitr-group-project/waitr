(function () {
    angular
    .module('waitrApp')
    .controller('restaRestaurantCtrl', ['restaurantInfo', 'userService', 'restaurantService', '$timeout', '$scope', restaAdminCtrl]);

    function restaAdminCtrl(restaurantInfo, userService, restaurantService, $timeout, $scope) {

        var rrc = this;
        rrc.currentUser = restaurantInfo.currentUser;
        rrc.restaurant = restaurantInfo.restaurant[0];

    }

})();
