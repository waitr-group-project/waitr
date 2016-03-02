(function () {
  angular
    .module('waitrApp')
.controller('restaHomeCtrl', ['restaurantService', 'waitlistService', '$state', "$ionicHistory", '$scope',  '$timeout', '$ionicPopup', restaHomeCtrl]);

function restaHomeCtrl (restaurantService, waitlistService, $state, $ionicHistory, $scope, $timeout, $ionicPopup) {
    var rhc = this;
    
    rhc.maxPartySize = waitlistService.maxPartySize;
    rhc.newPerson = {};
    
    var socket = io();
    
    socket.on('newPersonAdded', function(data) {
        console.log("socket data is: ", data);
        rhc.customerEntries.list.push(data);
    })
    
    socket.on('deletedPerson', function(data) {
        console.log("hitting deletedPerson with data: ", data);
        rhc.customerEntries.list.splice(data.pos, 1);
    })

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

   $timeout(function() {
      var currentUser = $scope.ac.currentUser;
      //console.log('custHome', currentRestaurant);
       console.log("the current user is: ", currentUser);
       restaurantService.getWaitlist(currentUser.restaurant_id).then(function(res) {
            console.log("response is: ", res[0]);
            rhc.customerEntries = res[0];
       });
    });

    rhc.addPersonToQ = function(newQPerson) {
        if (newQPerson.firstName && newQPerson.lastName && newQPerson.phone && newQPerson.partySize) {
            if (waitlistService.isValidPhone(newQPerson.phone) && newQPerson.partySize < waitlistService.maxPartySize) {
                waitlistService.addAnonToWaitlist(newQPerson, rhc.customerEntries._id, rhc.customerEntries.quotedTime).then(function(res) {
                    //console.log(res);

                    socket.emit('newPerson', res);

                    $ionicHistory.nextViewOptions({
                        disableBack:true
                    });

                    $state.go("restaurant.home");
                });
            } else {
                $ionicPopup.show({
                    title: "Invalid Data",
                    template: "Phone number must be 10 digits and party size cannot exceed 100<br/>Ex. 1234567890",
                    buttons: [
                        {text: "OK"}
                    ]
                })
            }
        } else {
            $ionicPopup.show({
                title: "Invalid Data",
                template: "Fill out all fields before pressing 'Submit'",
                buttons: [
                    {text: "OK"}
                ]
            })
        }
        
    };

    rhc.showWaitTimeModal = function(time) {
        console.log(time);
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
                    onTap: function(e) {
                        rhc.time = parseInt(rhc.time);
                        console.log(rhc.time);
                        if (rhc.time < 0 || isNaN(rhc.time)) {
                            e.preventDefault();
                        } else {
                            return rhc.time;
                        }
                    }
                }
            ]
        });

        myPopup.then(function(res) {
            //console.log("tapped!", res);
            if (res >= 0) {
                console.log(rhc.customerEntries);
                waitlistService.updateWaitTime(rhc.customerEntries._id, res).then(function(res) {
                    rhc.customerEntries.quotedTime = res;
                })
            }
        })
    }
  }

})();

