(function () {
  angular
    .module('waitrApp')
    .controller('restaHomeCtrl', ['restaurantService', '$stateParams', restaHomeCtrl]);

  function restaHomeCtrl (restaurantService, $stateParams) {
    var rhc = this;

    restaurantService.getWaitList('56ce9b91f6326bb743e015f0').then(function(response) {
      rhc.customerEntries = response[0];
    });

    rhc.addPersonToQ = function(newQPerson) {
        console.log(newQPerson);
    };



  }


})();
