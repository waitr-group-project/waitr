(function () {
'use strict';

angular.module('waitrApp')
  .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['authService', '$state', '$ionicPopup'];

  function LoginCtrl(authService, $state, $ionicPopup) {
    var logCtrl = this;

    logCtrl.credentials = {
      username: '',
      password: ''
    };

    logCtrl.login = login;

    ///////////////

    function login(credentials) {
      authService.login(credentials).then(function(user) {
        if (user.role === 'user') $state.go('customer.home');
        if (user.role === 'restaurant') $state.go('restaurant.home');
      }, function(res) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Error: ' + res
        });
      });
    }

  }
})();
