(function () {
    angular
        .module('waitrApp')
        .controller('custRestaurantCtrl', ['restaurantService', 'userService', 'waitlistService', '$stateParams', '$ionicHistory', '$state', '$timeout', '$scope', custRestaurantCtrl]);

    function custRestaurantCtrl(restaurantService, userService, waitlistService, $stateParams, $ionicHistory, $state, $timeout, $scope) {

        var crc = this;

        var restaurantId = $stateParams.restaurantId;
        //console.log('this is restaurant id', restaurantId);

        $timeout(function () {
            crc.currentUser = $scope.ac.currentUser;
            //console.log('custRestaurant', crc.currentUser);

            restaurantService.getCurrentRestaurants(restaurantId).then(function (restaurant) {
                //console.log('hey', restaurant[0]);
                crc.restaurant = restaurant[0];
            });
            restaurantService.getWaitlist(restaurantId).then(function (res) {
                crc.customerEntries = res[0];
            });

            crc.userAddingToQ = function () {
                //console.log('user adding to Q',crc.currentUser);
                waitlistService.addAnonToWaitlist(crc.currentUser, crc.restaurant.waitlist_id).then(function (res) {
                    //console.log(res);
                    $ionicHistory.nextViewOptions({
                        disableBack: true
                    });

                    $state.go("restaurant.home");
                });
            };

            crc.callTel = function(tel) {
                  window.location.href = 'tel:'+ tel;
              };

            crc.goBack = function () {
                $ionicHistory.goBack();
            };

            crc.infoHoursToggle = true;

            crc.showOnClick = function (value) {
                crc.infoHoursToggle = value;
            };
        });

    }

})();
