(function () {
'use strict';

angular.module('waitrApp')
  .factory('authService', authService);

  authService.$inject = ['$http', '$q'];

  function authService($http, $q) {
    return {

      register: register,
      login: login

    };

    //////////////////

    function register(data) {
      var deferred = $q.defer();
      $http
        .post('/register', data)
        .then(function(res) {
          return deferred.resolve(res);
        }, function() {
          console.log('error');
          return deferred.reject();
        });
      return deferred.promise;
    }

    function login(credentials) {
      var deferred = $q.defer();
      $http
        .post('/login', credentials)
        .then(function(res) {
          return deferred.resolve(res);
        }, function() {
          console.log('error');
          return deferred.reject();
        });
      return deferred.promise;
    }

  }
})();
