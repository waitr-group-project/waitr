(function () {
  angular
    .module('waitrApp')
    .controller('custSettingsCtrl', [custSettingsCtrl]);

  function custSettingsCtrl ($ionicPlatform, $cordovaVibration) {
    var csc = this;

    csc.toggle = function() {
      ocument.addEventListener( "deviceready", function() {
        $cordovaVibration.vibrate( 2000 ); }, false );

    }

  }

})();
