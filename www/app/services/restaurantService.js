(function () {
  angular
    .module('waitrApp')
<<<<<<< HEAD
    .service('restaurantService', ['$http', 'SERVER_URL', restaurantService]);

  function restaurantService($http, SERVER_URL) {

    this.getRestaurants = function () {
      return $http.get(SERVER_URL + '/api/restaurant').then(function(response) {
        return response.data;
      });
    };

    this.getCurrentRestaurant = function (id) {
      return $http.get(SERVER_URL + '/api/restaurant/' + id).then(function(response){
        return response.data;
      });
    };

    this.updateRestaurant = function (id, obj) {
      return $http.put(SERVER_URL + '/api/restaurant/' + id, obj).then(function(response) {
        return response.data;
      });
    };

    this.updateRestaurantMenu = function (id, menuObj) {
      return $http.put(SERVER_URL + '/api/restaurant/menu/' + id, menuObj)
        .then(function (response) {
=======
    .service('restaurantService', ['$http', restaurantService]);

    function restaurantService ($http) {

      this.getRestaurants = function () {
        return $http.get('http://104.131.135.179/api/restaurant').then(function(response) {
          return response.data;
        });
      };

      this.getCurrentRestaurant = function (id) {
        return $http.get('http://104.131.135.179/api/restaurant/' + id).then(function(response){
          return response.data;
        });
      };

      this.updateRestaurant = function (id, obj) {
        return $http.put('http://104.131.135.179/api/restaurant/' + id, obj).then(function(response) {
          return response.data;
        });
      };

      this.getWaitlist = function(waitListId) {
        return $http.get('http://104.131.135.179/api/waitlist/?restaurant_id=' + waitListId).then(function(response) {
>>>>>>> dev
          return response.data;
        });
    }
    this.getWaitlist = function (waitListId) {
      return $http.get(SERVER_URL + '/api/waitlist/?restaurant_id=' + waitListId).then(function (response) {
        return response.data;
      });
    };

  }

})();
