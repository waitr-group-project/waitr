(function () {
  angular
    .module('waitrApp')
    .service('waitlistService', waitlistService);

    function waitlistService ($http) {
        var url = "/api/waitlist";

        this.addAnonToWaitlist = function(user, restaurantInfo) {
            //first, we need to structure our data in a way that the server will accept
            var newListEntry = {
                firstName: user.firstName,
                lastName: user.lastName,
                partySize: user.partySize,
                phoneNumber: user.phoneNumber,
                timeAdded: new Date(),
                quotedTimeGiven: restaurantInfo.quotedTime,
                notes: user.notes
            };

            console.log("service gets: ", newListEntry);

            //now submit this as the data to the waitlist id on the restaurantInfo object
            return $http({
                method: "PUT",
                url: url + "/" + restaurantInfo._id + "/list",
                data: newListEntry
            }).then(function(res) {
                return res.data;
            })
        }
        
        this.getOneFromWaitlist = function(userId, waitlistId) {
            return $http({
                method: "GET",
                url: url + "/" + waitlistId + "/list/" + userId
            }).then(function(res) {
                return res.data;
            })
        }
        
        this.removeFromWaitlist = function(userId, waitlistId) {
            return $http({
                method: "DELETE",
                url: url + "/" + waitlistId + "/list/" + userId
            }).then(function(res) {
                return res.data;
            })
        }
        
        this.updateWaitlistEntry = function(userId, waitlistId, body) {
            delete body._id;
            return $http({
                method: "PUT",
                url: url + "/" + waitlistId + "/list/" + userId,
                data: body
            }).then(function(res) {
                return res.data;
            })
        }
    }

})();
