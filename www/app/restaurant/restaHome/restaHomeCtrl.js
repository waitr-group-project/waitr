(function () {
  angular
    .module('waitrApp')
    .controller('restaHomeCtrl', ['waitlistService', '$state', "$ionicHistory", restaHomeCtrl]);

  function restaHomeCtrl (waitlistService, $state, $ionicHistory) {
    var rhc = this;

    rhc.dummyData = {
        //MAKE SURE TO CHANGE REFERENCE IF YOU ARE TESTING
        _id: "56ce3580808588500f1a2bd1",
        restaurant_id: "56cdfcf8ed86c8382ded1979",
        quotedTime: 35
    };

    rhc.customerEntries = [];

    rhc.addPersonToQ = function(newQPerson) {
        console.log(newQPerson);
        waitlistService.addAnonToWaitlist(newQPerson, rhc.dummyData).then(function(res) {
            console.log(res);
            $ionicHistory.nextViewOptions({
                disableBack: true
            });

            $state.go("restaurant.home");
        })
    }
  }

})();
