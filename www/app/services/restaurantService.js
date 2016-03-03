(function () {
    angular
    .module('waitrApp')
    .service('restaurantService', ['$http', restaurantService]);

    function restaurantService($http) {

        this.getRestaurants = function () {
            return $http({
                method: 'GET',
                url: '/api/restaurant'
            }).then(function (response) {
                return response.data;
            });
        };


        this.getCurrentRestaurant = function (id) {
            return $http({
                method: 'GET',
                url: '/api/restaurant/' + id
            }).then(function (response) {
                return response.data;

            });
        };

        this.updateRestaurant = function (id, obj) {
            return $http({
                method: 'PUT',
                url: '/api/restaurant/' + id,
                data: obj
            }).then(function (response) {
                return response.data;
            });
        };

        this.updateRestaurantMenu = function (id, menuObj) {
            return $http
                .put('/api/restaurant/menu/' + id, menuObj)
                .then(function (response) {
                    return response.data;
                });
        }

    }

})();