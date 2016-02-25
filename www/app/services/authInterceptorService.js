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
        401: AUTH_EVENTS.notAuthenticated, // Failed attempt OR User not found
        403: AUTH_EVENTS.notAuthorized // Not Authorized to access resource
      }[response.status], response);
      return $q.reject(response);
    }

    // Status 200: OK
    // Status 500: Issue with request

  }
})();
