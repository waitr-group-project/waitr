(function () {
  angular
    .module('waitrApp')
    .service('restaurantService', ['$http', restaurantService]);

    function restaurantService ($http) {


        this.getRestaurants = function () {
          return $http({
            method: 'GET',
            url: '/api/restaurant'
          }).then(function (response) {
            return response.data;
          });
        };


      this.getCurrentRestaurants = function (id) {
        return $http({
          method: 'GET',
          url: '/api/restaurant/' + id
        }).then(function (response){
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

        this.getWaitlist = function(waitListId) {
          return $http.get('/api/waitlist/?restaurant_id=' + waitListId).then(function(response) {
            return response.data;
          });
        };


      this.getRestaurant = function(restaId) {
        return $http.get('/api/restaurant/?_id=' + restaId).then(function(response) {
          return response.data[0];
        });
      };

    }

})();
