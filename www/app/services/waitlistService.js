(function () {
  angular
    .module('waitrApp')
    .service('waitlistService', waitlistService);

  function waitlistService($http, SERVER_URL) {
    var url = SERVER_URL + "/api/waitlist/";

    this.isValidPhone = function (num) {
      if (num.length != 10) {
        return false;
      }
      num = parseInt(num);
      if (num && num > 1000000000) {
        return true;
      }
      return false;
    }

    this.maxPartySize = 100;

    this.addAnonToWaitlist = function (user, waitlistId, waitTime) {
        //first, we need to structure our data in a way that the server will accept
        var newListEntry = {
          firstName: user.firstName,
          lastName: user.lastName,
          partySize: user.partySize,
          phone: user.phone,
          timeAdded: new Date(),
          quotedTimeGiven: waitTime,
          notes: user.notes
        };

        if (user.user_id) {
          newListEntry.user_id = user.user_id;
        }

        //now submit this as the data to the waitlist id on the restaurantInfo object
        return $http({
          method: "PUT",
          url: url + waitlistId + "/list",
          data: newListEntry
        }).then(function (res) {
          return res.data;
        })
      };
      
      this.getOneFromWaitlist = function (userId, waitlistId) {
        return $http({
          method: "GET",
          url: url + waitlistId + "/list/" + userId
        }).then(function (res) {
          return res.data;
        })
      };

      this.removeFromWaitlist = function (userId, waitlistId) {
        return $http({
          method: "DELETE",
          url: url + waitlistId + "/list/" + userId
        }).then(function (res) {
          //console.log("hitting return");
          return res.data;
        })
      };

      this.updateWaitlistEntry = function (userId, waitlistId, body) {
        delete body._id;
        return $http({
          method: "PUT",
          url: url + waitlistId + "/list/" + userId,
          data: body
        }).then(function (res) {
          return res.data;
        })
      };

      this.updateWaitTime = function (waitlistId, time) {
        return $http({
          method: "PUT",
          url: url + waitlistId,
          data: { quotedTime: time }
        }).then(function (res) {
          //console.log(res.data.quotedTime);
          return res.data.quotedTime;
        })
      }
      this.getWaitlist = function (waitListId) {
        return $http
          .get(url + '?restaurant_id=' + waitListId)
          .then(function (response) {
            return response.data;
          });
      };
    }

  })();