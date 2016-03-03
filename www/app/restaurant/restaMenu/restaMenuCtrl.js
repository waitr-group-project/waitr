(function () {
    angular
    .module('waitrApp')
    .controller('restaMenuCtrl', ['$scope', '$ionicHistory', restaMenuCtrl]);

    function restaMenuCtrl($scope, $ionicHistory) {
        var rmc = this;
        rmc.menuTitle = null;
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
        };
    }
})();

