(function () {
  angular
    .module('waitrApp')
.controller('restaHomeCtrl', ['restaurantService', 'waitlistService', '$state', "$ionicHistory", restaHomeCtrl]);

function restaHomeCtrl (restaurantService, $stateParams, waitlistService, $state, $ionicHistory) {
var rhc = this;

    restaurantService.getWaitList('56cf854d507ee272a9dc2dbb').then(function(response) {
      rhc.customerEntries = response[0];
    });

    rhc.addPersonToQ = function(newQPerson) {
        console.log(newQPerson);
    };


    rhc.dummyData = {
        //MAKE SURE TO CHANGE REFERENCE IF YOU ARE TESTING
        _id: "56ce2d16b6357f5435488161",
        restaurant_id: "56cf854d507ee272a9dc2dbb",
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
        });
    };
  }


})();
