(function () {
  angular
    .module('waitrApp')
    .controller('custSettingsCtrl', ['userService', '$timeout', '$scope',custSettingsCtrl]);

  function custSettingsCtrl (userService, $timeout, $scope) {
    var csc = this;

    $timeout(function() {
      var currentUser = $scope.ac.currentUser;
      //console.log('custHome', currentUser.id);

      userService.currentUser(currentUser.id).then(function (currUser){
        var user = currUser[0];
        csc.firstName = user.firstName;
        csc.lastName = user.lastName;
        csc.phone = user.phone;
        csc.email = user.email;
      });

      csc.updateUser = function(firstName, lastName, phone, email) {
        var user = {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email
        };
        userService.updateUser('56ce45fba2440fe4375e106c', user);
      };

    });





  }

})();
