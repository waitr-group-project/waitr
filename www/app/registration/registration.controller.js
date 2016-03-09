(function () {
'use strict';

angular.module('waitrApp')
  .controller('RegistrationCtrl', RegistrationCtrl);

  RegistrationCtrl.$inject = ['authService', '$state', '$ionicPopup'];

  function RegistrationCtrl(authService, $state, $ionicPopup) {
    var regCtrl = this;

    regCtrl.cust = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    };
    regCtrl.rest = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      restaurantName: ''
    };

    regCtrl.register = register;

    ///////////////

    function register(data) {
      authService.register(data).then(function(res) {
        // console.log(res);
        regCtrl.cust.firstName = '';
        regCtrl.cust.lastName = '';
        regCtrl.cust.email = '';
        regCtrl.cust.password = '';
        regCtrl.cust.phone = '';

        regCtrl.rest.firstName = '';
        regCtrl.rest.lastname = '';
        regCtrl.rest.email = '';
        regCtrl.rest.password = '';
        regCtrl.rest.phone = '';
        regCtrl.rest.restaurantName = '';

        if (res.role === 'user') $state.go('customer.home');
        if (res.role === 'restaurant') $state.go('restaurant.home');
      }, function(res) {
        // console.log('Registration Error: ' + res.data)
        // var alertPopup = $ionicPopup.alert({
        //   title: 'Registration failed!',
        //   template: 'Error: ' + res
        // });
      });
    }

  }
})();
