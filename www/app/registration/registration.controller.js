(function () {
'use strict';

angular.module('waitrApp')
  .controller('RegistrationCtrl', RegistrationCtrl);

  RegistrationCtrl.$inject = ['authService', '$state', '$ionicPopup'];

  function RegistrationCtrl(authService, $state, $ionicPopup) {
    var regCtrl = this;

    regCtrl.register = register;

    ///////////////

    function register(data) {
      authService.register(data).then(function(res) {
        console.log(res);
        if (res.role === 'user') $state.go('customer.home');
        if (res.role === 'restaurant') $state.go('restaurant.home');
      }, function(res) {
        var alertPopup = $ionicPopup.alert({
          title: 'Registration failed!',
          template: 'Error: ' + res
        });
      });
    }

  }
})();
