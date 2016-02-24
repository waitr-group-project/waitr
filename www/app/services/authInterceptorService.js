(function () {
'use strict';

angular.module('waitrApp')
  .factory('authInterceptorService', authInterceptorService);

  authInterceptorService.$inject = ['$rootScope', '$q', 'AUTH_EVENTS', 'authTokenService'];

  function authInterceptorService($rootScope, $q, AUTH_EVENTS, authTokenService) {
    return {

      request: addAuthToken,
      responseError: responseError

    };

    //////////////////

    function addAuthToken(config) {
      var token = authTokenService.getToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }

    function responseError(response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }

  }
})();
