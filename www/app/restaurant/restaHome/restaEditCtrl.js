(function () {
  angular
    .module('waitrApp')
.controller('restaEditCtrl', ['waitlistService', '$state', "$ionicHistory", "$stateParams", "$ionicPopup", restaEditCtrl]);

function restaEditCtrl (waitlistService, $state, $ionicHistory, $stateParams, $ionicPopup) {
    
    console.log($stateParams);
    
    var rec = this;

    waitlistService.getOneFromWaitlist($stateParams.person, $stateParams.waitlist).then(function(res) {
        rec.person = res;
    })
    
    rec.submitEditedEntry = function(person) {
        console.log("rec.person is: ", person);
        waitlistService.updateWaitlistEntry($stateParams.person, $stateParams.waitlist, person).then(function(res) {
            console.log("successfully updated entry!");
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go("restaurant.home");
        })
    }
    
    var removeFromWaitlist = function() {
        waitlistService.removeFromWaitlist($stateParams.person, $stateParams.waitlist).then(function(res) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go("restaurant.home");
        })
    }
    
    rec.showCheckInPopup = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: "Check in user",
            template: "Are you sure you want to check in this user?"
        });
        
        confirmPopup.then(function(res) {
            if (res) {
                console.log("user wants to check person in");
                removeFromWaitlist();
            } else {
                console.log("user does not want to check person in");
            }
        });
    };
    
    rec.showRemovePopup = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: "Remove from waitlist",
            template: "WARNING: this will remove the user from the waitlist entirely"
        });
        
        confirmPopup.then(function(res) {
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