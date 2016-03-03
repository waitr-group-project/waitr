(function() {
  angular
    .module('waitrApp')
    .service('restaurantService', ['$http', 'SERVER_INFO', restaurantService]);

    function restaurantService ($http, SERVER_INFO) {

        this.getRestaurants = function () {
          return $http({
            method: 'GET',
            url: SERVER_INFO.url + '/api/restaurant'
          }).then(function (response) {
            return response.data;
          });
        };


      this.getCurrentRestaurants = function (id) {
        return $http({
          method: 'GET',
          url: SERVER_INFO.url + '/api/restaurant/' + id
        }).then(function (response){
          return response.data;
        });
      };

      this.updateRestaurant = function (id, obj) {
        return $http({
          method: 'PUT',
          url: SERVER_INFO.url + '/api/restaurant/' + id,
          data: obj
        }).then(function (response) {
          return response.data;
        });
      };

        this.getWaitlist = function(waitListId) {
          return $http.get(SERVER_INFO.url + '/api/waitlist/?restaurant_id=' + waitListId).then(function(response) {
            //console.log(response);
            return response.data;
          });
        };


      this.getRestaurant = function(restaId) {
        return $http.get(SERVER_INFO.url + '/api/restaurant/?_id=' + restaId).then(function(response) {
          return response.data[0];
        });
      };
      

        this.getRestaurantMenu = function(restaId) {
            return $http.get(SERVER_INFO.url + '/api/restaurant/?_id=' + restaId).then(function(response) {
                console.log(response.data[0]);
                return response.data[0];
            });
        };
    }

})();
