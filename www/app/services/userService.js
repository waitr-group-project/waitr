(function () {
  angular
    .module('waitrApp')
    .service('userService', userService);

  function userService($http) {

    this.currentUser = function (id) {
      return $http({
        method: 'GET',
        url: '/api/user/' + id
      }).then(function (response) {
        return response.data;
      });
    };

    this.updateUser = function (id, obj) {
      return $http({
        method: 'PUT',
        url: '/api/user/' + id,
        data: obj
      }).then(function (response) {
        return response.data;
      });
    };

  }

})();
