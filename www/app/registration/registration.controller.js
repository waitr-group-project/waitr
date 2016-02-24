(function () {
'use strict';

angular.module('waitrApp')
  .controller('RegistrationCtrl', RegistrationCtrl);

  RegistrationCtrl.$inject = ['authService'];

  function RegistrationCtrl(authService) {
    var regCtrl = this;

    regCtrl.register = register;

    ///////////////

    function register(data) {
      authService.register(data).then(function(res) {
        console.log(res);
      }, function(res) {
        console.log('error' + res);
      });
    }

  }
})();
