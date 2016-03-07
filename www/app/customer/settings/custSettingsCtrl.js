(function () {
  angular
    .module('waitrApp')
    .controller('custSettingsCtrl', ['userService', '$scope','$state', custSettingsCtrl]);

  function custSettingsCtrl(userService, $scope, $state) {
    var csc = this;

    csc.currentUser = $scope.ccc.currentUser;
    console.log('currentUser',csc.currentUser);
    csc.firstName = csc.currentUser.firstName;
    csc.lastName = csc.currentUser.lastName;
    csc.phone = csc.currentUser.phone;
    csc.email = csc.currentUser.email;

    csc.updateUser = function (firstName, lastName, phone, email) {
      var user = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
      };
      userService.updateUser(csc.currentUser._id, user).then(function (response) {
        console.log('hello', response);
        $scope.ccc.currentUser = response;
      });
      //$scope.apply();
      $state.go('customer.settings')
    };
;
  }

})();
