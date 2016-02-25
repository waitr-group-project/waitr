(function () {
  angular
    .module('waitrApp')
    .controller('restaProfileCtrl', ['restaurantService', '$stateParams', restaProfileCtrl]);

  function restaProfileCtrl (restaurantService, $stateParams) {
    var rpc = this;

      restaurantService.getRestaurant('56ce9b91f6326bb743e015f0').then(function(response) {
        rpc.restaurantObj = response;
      });

      rpc.infoHoursToggle = true;

      rpc.showOnClick = function(value) {
        rpc.infoHoursToggle = value;
      };






  }

})();
