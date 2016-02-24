(function () {
  angular
    .module('waitrApp')
<<<<<<< HEAD
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
=======
    .service('restaurantService', [restaurantService]);
      
    function restaurantService () {
>>>>>>> dev
    }

})();
