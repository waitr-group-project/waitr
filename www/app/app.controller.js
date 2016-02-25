(function () {
'use strict';

angular.module('waitrApp')
  .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$rootScope', 'AUTH_EVENTS', 'authService', '$scope', '$state', '$ionicPopup'];

  function AppCtrl($rootScope, AUTH_EVENTS, authService, $scope, $state, $ionicPopup) {
    var ac = this;

    $scope.$on('currentUser', function(event, user) {
      setCurrentUser(user);
    });

    $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
      var alertPopup = $ionicPopup.alert({
        title: 'Unauthorized!',
        template: 'Invalid access.'
      });
    });

    $scope.$on(AUTH_EVENTS.notAuthenticated, function(event, response) {
      authService.logout();
      $state.go('login');
      var alertPopup = $ionicPopup.alert({
        title: 'Unauthenticated!',
        template: 'Must be logged in.' + response.data
      });
    });

    ac.currentUser = null;
    ac.logout = logout;

    ////////////////

    function logout(user) {
      authService.logout();
      ac.currentUser = null;
    }

    function setCurrentUser(user) {
      ac.currentUser = user;
    }

  }
})();
