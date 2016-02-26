(function () {
  angular
    .module('waitrApp')
    .controller('custSettingsCtrl', ['userService','$stateParams',custSettingsCtrl]);

  function custSettingsCtrl (userService,$ionicPlatform, $cordovaVibration, $stateParams) {
    var csc = this;

    //var currentUserID = $stateParams.id;

    csc.toggle = function() {
      document.addEventListener( "deviceready", function() {
        $cordovaVibration.vibrate( 2000 ); }, false );
    };

    userService.currentUser('56ce45fba2440fe4375e106c').then(function (currUser){
      var user = currUser[0];
      console.log(user);
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

  }

})();
