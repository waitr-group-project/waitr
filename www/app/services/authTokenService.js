(function () {
'use strict';

angular.module('waitrApp')
  .factory('authTokenService', authTokenService);

  authTokenService.$inject = ['$window'];

  function authTokenService($window) {
    return {

      setToken: setToken,
      getToken: getToken

    };

    //////////////////

    function setToken(token) {
      if (token) {
        $window.localStorage.setItem('token', token);
        return token;
      } else {
        $window.localStorage.removeItem('token');
      }
    }

    function getToken() {
      return $window.localStorage.getItem('token');
    }

  }
})();
