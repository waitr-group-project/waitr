(function () {
'use strict';

angular.module('waitrApp')
  .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$rootScope', 'USER_ROLES', 'AUTH_EVENTS', 'authService', '$scope'];

  function AppCtrl($rootScope, USER_ROLES, AUTH_EVENTS, authService, $scope) {
    var ac = this;

    $scope.$on('currentUser', function(event, user) {
      setCurrentUser(user);
    });

    ac.currentUser = null;
    ac.logout = logout;

    ////////////////

    function logout(user) {
      authService.logout();
      ac.currentUser = null;
    }

  }
})();
