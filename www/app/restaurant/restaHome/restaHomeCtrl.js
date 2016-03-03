(function () {
  angular
    .module('waitrApp')
    .controller('restaHomeCtrl', ['waitlistService', '$state', "$ionicHistory", '$scope', '$ionicPopup', restaHomeCtrl]);

  function restaHomeCtrl(waitlistService, $state, $ionicHistory, $scope, $ionicPopup) {
    var rhc = this;

    moment.locale('en', {
      relativeTime: {
        future: "in %s",
        past: "%s",
        s: "%ds",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1mon",
        y: "1y",
        yy: "%dy"
      }
    });

    rhc.currentUser = $scope.rrc.currentUser;

    waitlistService.getWaitlist(rhc.currentUser.restaurant_id).then(function (res) {
      rhc.customerEntries = res[0];
    });

    rhc.addPersonToQ = function (newQPerson) {
      waitlistService.addAnonToWaitlist(newQPerson, rhc.customerEntries._id, rhc.customerEntries.quotedTime)
        .then(function (res) {
          console.log(res);
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          $state.go("restaurant.home");
        });
    };

    rhc.showWaitTimeModal = function (time) {
      rhc.time = time;
      var myPopup = $ionicPopup.confirm({
        template: '<label class="item item-input"><input type="tel" ng-model="rhc.time" min="0"></label>',
        title: "Enter Wait Time",
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function (e) {
              rhc.time = parseInt(rhc.time);
              if (rhc.time < 0 || isNaN(rhc.time)) {
                e.preventDefault();
              } else {
                return rhc.time;
              }
            }
          }
        ]
      });

      myPopup.then(function (res) {
        if (res >= 0) {
          waitlistService.updateWaitTime(rhc.customerEntries._id, res).then(function (res) {
            rhc.customerEntries.quotedTime = res;
          })
        }
      })
    }
  }

})();

