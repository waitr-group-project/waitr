(function () {
  angular
    .module('waitrApp')
    .controller('custWaitlistCtrl', ['userService', 'restaurantService', '$timeout', '$scope', 'waitlistService', '$ionicPopup', '$state', '$ionicHistory', custWaitlistCtrl]);

  function custWaitlistCtrl(userService, restaurantService, $timeout, $scope, waitlistService, $ionicPopup, $state, $ionicHistory) {
    var cwc = this;
    var socket = io.connect('http://104.131.135.179');

    cwc.currentUser = $scope.ccc.currentUser;

    socket.on('newPersonAdded', function (data) {
      cwc.currentUser.inWaitList.list.push(data);
      $scope.$apply();
    });

    socket.on('deletedPerson', function (data) {
      if (cwc.currentUser.inWaitList) {
        cwc.currentUser.inWaitList.list.splice(data.pos, 1);
        $scope.$apply();
      }
    });


    userService.currentUser(cwc.currentUser._id).then(function(user) {
      cwc.currentUser = user[0];

      restaurantService.getCurrentRestaurant(cwc.currentUser.inWaitList.restaurant_id).then(function(data) {
        cwc.restaurant = data[0];
      });
    });

    cwc.removeFromWaitlist = function () {
      var list = cwc.currentUser.inWaitList.list;
      for (var i = 0; i < list.length; i++) {
        if (list[i].user_id == cwc.currentUser._id) {
          waitlistService.removeFromWaitlist(list[i]._id, cwc.currentUser.inWaitList._id).
            then(function (res) {
              socket.emit('deletePerson', res);
              $ionicHistory.nextViewOptions({
                disableBack: true
              });
              $state.go("customer.home");
            });
        }
      }
    };

    cwc.showRemovePopup = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: "Remove from waitlist",
        template: "WARNING: this will remove you from the list"
      });

      confirmPopup.then(function (res) {
        if (res) {
          cwc.removeFromWaitlist();
        } else {
        }
      })
    }
  }

})();
