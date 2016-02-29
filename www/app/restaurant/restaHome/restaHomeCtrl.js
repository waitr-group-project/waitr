(function () {
  angular
    .module('waitrApp')
.controller('restaHomeCtrl', ['restaurantService', 'waitlistService', '$state', "$ionicHistory", restaHomeCtrl]);

function restaHomeCtrl (restaurantService, waitlistService, $state, $ionicHistory) {
    var rhc = this;
    
    moment.locale('en', {
    relativeTime : {
        future: "in %s",
        past:   "%s",
        s:  "%ds",
        m:  "1m",
        mm: "%dm",
        h:  "1h",
        hh: "%dh",
        d:  "1d",
        dd: "%dd",
        M:  "1mon",
        y:  "1y",
        yy: "%dy"
    }
    });

   rhc.dummyData = {
        //MAKE SURE TO CHANGE REFERENCE IF YOU ARE TESTING
        _id: "56cf91fd1c8d42bf93537247",
        restaurant_id: "56cf854d507ee272a9dc2dbb",
        quotedTime: 35
    };
    
    restaurantService.getWaitlist(rhc.dummyData.restaurant_id).then(function(response) {
        rhc.customerEntries = response[0];
    });


    rhc.addPersonToQ = function(newQPerson) {
        console.log(newQPerson);
        waitlistService.addAnonToWaitlist(newQPerson, rhc.dummyData).then(function(res) {
            console.log(res);
            $ionicHistory.nextViewOptions({
                disableBack:true
            });

            $state.go("restaurant.home");
        });
    };
  }

})();

