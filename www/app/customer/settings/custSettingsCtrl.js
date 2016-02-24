(function () {
  angular
    .module('waitrApp')
    .controller('custSettingsCtrl', [custSettingsCtrl]);

  function custSettingsCtrl ($cordovaVibration) {
    var csc = this;

    csc.toggle = function() {
      $ionicPlatform.ready(function() {
        $cordovaVibration.vibrate(100).then(function() {
          console.log("Phone vibrating");
        })

      });

    }

  }

})();
