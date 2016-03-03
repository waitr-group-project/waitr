(function () {
  angular
    .module('waitrApp')
    .service('restaurantService', ['$http', restaurantService]);

  function restaurantService($http) {

    this.getRestaurants = function () {
      return $http.get('/api/restaurant').then(function (response) {
        return response.data;
      });
    };

    this.getCurrentRestaurant = function (id) {
      return $http.get('/api/restaurant/' + id).then(function (response) {
        return response.data;
      });
    };

    this.updateRestaurant = function (id, obj) {
      return $http.put('/api/restaurant/' + id, obj).then(function (response) {
        return response.data;
      });
    };

    this.updateRestaurantMenu = function (id, menuObj) {
      return $http.put('/api/restaurant/menu/' + id, menuObj)
        .then(function (response) {
          return response.data;
        });
    }
    this.getWaitlist = function (waitListId) {
      return $http.get('/api/waitlist/?restaurant_id=' + waitListId).then(function (response) {
        return response.data;
      });
    };

  }

})();
