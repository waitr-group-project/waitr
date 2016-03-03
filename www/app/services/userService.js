(function () {
  angular
    .module('waitrApp')
    .service('userService', ['$http', 'SERVER_INFO', userService]);

    function userService ($http, SERVER_INFO) {

      this.currentUser = function (id) {
        return $http({
          method: 'GET',
          url: SERVER_INFO.url + '/api/user/' + id
        }).then(function (response) {
          return response.data;
        });
      };

      this.updateUser = function (id, obj) {
        return $http({
          method: 'PUT',
          url: SERVER_INFO.url + '/api/user/' + id,
          data: obj
        }).then(function (response) {
          return response.data;
        });
      };

    }

})();
