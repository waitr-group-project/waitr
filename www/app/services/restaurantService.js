(function () {
  angular
    .module('waitrApp')
    .service('restaurantService', restaurantService);

    function restaurantService ($http) {

        this.getRestaurants = function () {
          return $http({
            method: 'GET',
            url: '/api/restaurant'
          }).then(function (response) {
            console.log(response);
            return response.data
          })
        };

        this.getCurrentRestaurants = function (id) {
          return $http({
            method: 'GET',
            url: '/api/restaurant/' + id
          }).then(function (response){
            return response.data
          })
        }
    }

})();
