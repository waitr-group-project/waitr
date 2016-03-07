/**
 * Created by danle on 2/29/16.
 */
(function () {
  angular
    .module('waitrApp')
    .controller('custWaitListConfirmCtrl', ['$stateParams', '$timeout', '$scope', 'waitlistService', 'restaurantService', '$state', 'userService', '$ionicHistory', custWaitListConfirmCtrl]);

  function custWaitListConfirmCtrl($stateParams, $timeout, $scope, waitlistService, restaurantService, $state, userService, $ionicHistory) {

    var cwlc = this;
    var currRest = $stateParams.restaurantId;
    var socket = io.connect('http://104.131.135.179');
    cwlc.currentUser = $scope.ccc.currentUser;

    restaurantService.getCurrentRestaurant(currRest)
      .then(function (data) {
        cwlc.currRestObj = data;
      });

    cwlc.userAddingToQ = function (firstname, lastname, partysize, phone, notes) {
      var person = {
        user_id: cwlc.currentUser._id,
        firstName: firstname,
        lastName: lastname,
        partySize: partysize,
        phone: phone,
        notes: notes
      };

      waitlistService.addAnonToWaitlist(person, cwlc.currRestObj[0].waitlist_id)
        .then(function (res) {
          socket.emit('newPerson', res);
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          var waitlistId = {
            inWaitList: cwlc.currRestObj[0].waitlist_id
          };
          userService.updateUser(cwlc.currentUser._id, waitlistId);
          $state.go("customer.waitlist");
        });
    }

  }

})();
