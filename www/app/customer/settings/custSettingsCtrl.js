(function () {
  angular
    .module('waitrApp')
    .controller('custSettingsCtrl', [custSettingsCtrl]);

  function custSettingsCtrl ($cordovaVibration) {
    var csc = this;

    //$cordovaVibration.vibrate(500);

    //csc.vibrate = false;
    csc.vibrate = {checked: true};

    console.log(csc.vibrate);
  }

})();
