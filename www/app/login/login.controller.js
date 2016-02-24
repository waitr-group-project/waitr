(function () {
'use strict';

angular.module('waitrApp')
  .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['authService'];

  function LoginCtrl(authService) {
    var logCtrl = this;

    logCtrl.credentials = {
      username: '',
      password: ''
    };

    logCtrl.login = login;

    ///////////////

    function login(credentials) {
      authService.login(credentials).then(function(res) {
        console.log(res);
      }, function(res) {
        console.log('error' + res);
      });
    }

  }
})();
