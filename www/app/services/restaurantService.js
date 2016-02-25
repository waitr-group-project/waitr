(function () {
  angular
    .module('waitrApp')
    .service('restaurantService', restaurantService);

    function restaurantService ($http) {

        this.getWaitList = function(waitListId) {
          return $http.get('/api/waitlist/?&restaurant_id=' + waitListId).then(function(response) {
            return response.data;
          });
        };

        this.getRestaurant = function(restaId) {
        return $http.get('/api/restaurant/?&_id=' + restaId).then(function(response) {
          return response.data[0];
        });
      };

    }

})();
