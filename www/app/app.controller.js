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
        template: 'Invalid access.',
        buttons: [{
            text: '<b>OK</b>',
            type: 'button-energized'
        }]
      });
    });

    $scope.$on(AUTH_EVENTS.notAuthenticated, function(event, response) {
      authService.logout();
      $state.go('login');
      var alertPopup = $ionicPopup.alert({
        title: 'Unauthenticated!',
        template: response.data,
        buttons: [{
            text: '<b>OK</b>',
            type: 'button-energized'
        }]
      });
    });

    ac.currentUser = null;
    ac.logout = logout;

    ////////////////

    function logout() {
      ac.currentUser = null;
      authService.logout();
      $state.go('login');
    }

    function setCurrentUser(user) {
      ac.currentUser = user;
    }

  }
})();
