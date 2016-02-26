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
        };

        this.getWaitList = function(waitListId) {
          return $http.get('/api/waitlist/?&restaurant_id=' + waitListId).then(function(response) {
            return response.data;
          });
        };

        this.getRestaurant = function(restaId) {
            return $http.get('/api/restaurant/?&_id=' + restaId).then(function(response) {
                console.log(response.data[0]);
                return response.data[0];
            });
        };
        
        this.getRestaurantMenu = function(restaId) {
            return $http.get('/api/restaurant/?&_id=' + restaId).then(function(response) {
                return response.data[0].menu[0];
            });
        };

    }

})();
