(function() {
  angular
    .module('waitrApp')
    .service('waitlistService', waitlistService);

    function waitlistService ($http) {
        var url = "/api/waitlist/";

        this.addAnonToWaitlist = function(user, waitListInfo) {
            //first, we need to structure our data in a way that the server will accept
            var newListEntry = {
                firstName: user.firstName,
                lastName: user.lastName,
                //partySize: user.partySize,
                phoneNumber: user.phone,
                timeAdded: new Date(),
                //quotedTimeGiven: restaurantInfo.quotedTime,
                notes: user.notes
            };

            //console.log("service gets: ", newListEntry);
          //console.log("restaurantInfo", restaurantInfo._id);

            //now submit this as the data to the waitlist id on the restaurantInfo object
            return $http({
                method: "PUT",
                url: url + waitListInfo._id + "/list",
                data: newListEntry
            }).then(function(res) {
                return res.data;
            });
        };
    }

})();
