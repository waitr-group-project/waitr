(function () {
  angular
    .module('waitrApp')
    .controller('restaSettingsCtrl', [restaSettingsCtrl]);

  function restaSettingsCtrl () {
    var rsc = this;

    rsc.hours = {
      monday: { openTime: rsc.mondayOpen, closeTime: rsc.mondayClose },
      tuesday: { openTime: rsc.tuesdayOpen, closeTime: rsc.tuesdayClose },
      wednesday: { openTime: rsc.wednesdayOpen, closeTime: rsc.wednesdayClose },
      thursday: { openTime: rsc.thursdayOpen, closeTime: rsc.thursdayClose },
      friday: { openTime: rsc.fridayOpen, closeTime: rsc.fridayClose},
      saturday: { openTime: rsc.saturdayOpen, closeTime: rsc.saturdayClose},
      sunday: { openTime: rsc.sundayOpen, closeTime: rsc.sundayClose}
    };


  }

})();
