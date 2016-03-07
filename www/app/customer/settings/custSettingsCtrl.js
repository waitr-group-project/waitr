(function () {
  angular
    .module('waitrApp')
    .controller('custSettingsCtrl', ['userService', '$state', '$timeout', '$scope', custSettingsCtrl]);

  function custSettingsCtrl(userService, $state, $timeout, $scope) {
    var csc = this;

    csc.currentUser = $scope.ccc.currentUser;
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
      userService.updateUser(csc.currentUser._id, user).then(function(user) {
        console.log(user);
        $scope.ccc.currentUser = user;
        // csc.currentUser = user;
        $state.go('customer.settings');
      });

    };

  }

})();
