(function () {
  angular
    .module('waitrApp')
    .service('userService', ['$http', 'SERVER_URL', userService]);

  function userService($http, SERVER_URL) {

    this.currentUser = function (id) {
      return $http({
        method: 'GET',
        url: SERVER_URL + '/api/user/' + id
      }).then(function (response) {
        return response.data;
      });
    };

    this.updateUser = function (id, obj) {
      return $http({
        method: 'PUT',
        url: SERVER_URL + '/api/user/' + id,
        data: obj
      }).then(function (response) {
        return response.data;
      });
    };

  }

})();
