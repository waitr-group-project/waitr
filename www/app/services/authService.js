(function () {
'use strict';

angular.module('waitrApp')
  .factory('authService', authService);

  authService.$inject = ['$http', 'SERVER_URL', '$q', 'authTokenService', '$state', '$rootScope'];

  function authService($http, SERVER_URL, $q, authTokenService, $state, $rootScope) {
    return {

      register: register,
      login: login,
      logout: logout,
      isAuthenticated: isAuthenticated,
      isAuthorized: isAuthorized,
      getUser: getUser

    };

    //////////////////

    function register(data) {
      var deferred = $q.defer();
      $http
        .post(SERVER_URL + '/register', data)
        .then(function(res) {
          authTokenService.setToken(res.data.token);
          var currentUser = parseToken(res.data.token);
          $rootScope.$broadcast('currentUser', currentUser);
          return deferred.resolve(currentUser);
        }, function(res) {
          return deferred.reject(res);
        });
      return deferred.promise;
    }

    function login(credentials) {
      var deferred = $q.defer();
      $http
        .post(SERVER_URL + '/login', credentials)
        .then(function(res) {
          authTokenService.setToken(res.data.token);
          var currentUser = parseToken(res.data.token);
          $rootScope.$broadcast('currentUser', currentUser);
          return deferred.resolve(currentUser);
        }, function(res) {
          return deferred.reject(res);
        });
      return deferred.promise;
    }

    function logout() {
      authTokenService.setToken();
      // $state.go('login');
    }

    function isAuthenticated() {
      return !!getUser();
    }

    function isAuthorized(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (isAuthenticated() && authorizedRoles.indexOf(getUser().role) !== -1);
    }

    ////////////////

    function parseToken(token) {
      if (token) {
        return JSON.parse(atob(token.split('.')[1]));
      } else {
        return null;
      }
    }

    function getUser() {
      var currentUser = authTokenService.getToken();
      if (currentUser) {
        console.log(JSON.parse(atob(currentUser.split('.')[1])));
        return JSON.parse(atob(currentUser.split('.')[1]));
      } else {
        return null;
      }
    }


  }
})();
