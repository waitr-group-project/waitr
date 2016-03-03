/**
 * Created by danle on 2/29/16.
 */
(function () {
    angular
    .module('waitrApp')
    .controller('custWaitListConfirmCtrl', ['$stateParams', '$scope', 'waitlistService', 'restaurantService', '$state', 'userService', custWaitListConfirmCtrl]);

    function custWaitListConfirmCtrl($stateParams, $scope, waitlistService, restaurantService, $state, userService) {
        var cwlc = this;

        cwlc.currRest = $stateParams.restaurantId;

        cwlc.currentUser = $scope.ccc.currentUser;
        console.log('custWaitListConfirm', cwlc.currentUser);

        restaurantService.getCurrentRestaurant(cwlc.currRest).then(function (data) {
            var currRestObj = data;
            cwlc.userAddingToQ = function (firstname, lastname, partysize, phone, notes) {
                var person = {
                    user_id: cwlc.currentUser._id,
                    firstName: firstname,
                    lastName: lastname,
                    partySize: partysize,
                    phone: phone,
                    notes: notes
                };
                waitlistService.addAnonToWaitlist(person, currRestObj[0].waitlist_id).then(function (res) {
                    var waitlistId = {
                        inWaitList: currRestObj[0].waitlist_id
                    };
                    userService.updateUser(cwlc.currentUser._id, waitlistId);
                    $state.go("customer.waitlist");
                });
            };

        });

    }
})();
