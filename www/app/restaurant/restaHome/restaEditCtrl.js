(function () {
  angular
    .module('waitrApp')

    .controller('restaEditCtrl', ['waitlistService', '$state', "$ionicHistory", "$stateParams", "$ionicPopup", 'restaurantService', restaEditCtrl]);

  function restaEditCtrl(waitlistService, $state, $ionicHistory, $stateParams, $ionicPopup, restaurantService) {
    var socket = io.connect('http://104.131.135.179');
    var rec = this;

    waitlistService.getOneFromWaitlist($stateParams.person, $stateParams.waitlist).then(function (res) {
      rec.person = res
    });

    rec.notification = function () {
      var obj = {
        phone: '+1'+rec.person.phone,
        firstName: rec.person.firstName,
        //restaurant:
        //message: rec.message
      };
      console.log('this is the phone number',obj.phone);
      restaurantService.notification(obj);
    };

    rec.submitEditedEntry = function (person) {
      console.log("rec.person is: ", person);
      waitlistService.updateWaitlistEntry($stateParams.person, $stateParams.waitlist, person).then(function (res) {
        console.log("successfully updated entry!");

        $state.go("restaurant.home");
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
      })
    };

    var removeFromWaitlist = function () {
      waitlistService.removeFromWaitlist($stateParams.person, $stateParams.waitlist).then(function (res) {
        socket.emit('deletePerson', res);
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $state.go("restaurant.home");
      })
    };

    rec.showCheckInPopup = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: "Check in user",
        template: "Are you sure you want to check in this user?"
      });

      confirmPopup.then(function (res) {
        if (res) {
          console.log("user wants to check person in");
          removeFromWaitlist();
        } else {
          console.log("user does not want to check person in");
        }
      });
      $state.go("restaurant.home");
    }

    rec.showCheckInPopup = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: "Check in user",
        template: "Are you sure you want to check in this user?"
      });

      confirmPopup.then(function (res) {
        if (res) {
          console.log("user wants to check person in");
          removeFromWaitlist();
        } else {
          console.log("user does not want to check person in");
        }
      });
    };

    rec.showRemovePopup = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: "Remove from waitlist",
        template: "WARNING: this will remove the user from the waitlist entirely"
      });

      confirmPopup.then(function (res) {
        if (res) {
          console.log("user wants to remove person from list");
          removeFromWaitlist();
        } else {
          console.log("user does not want to remove person from list");
        }
      })
    }

  }
})();
