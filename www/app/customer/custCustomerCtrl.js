(function () {
  angular
    .module('waitrApp')
    .controller('custCustomerCtrl', ['userService', '$timeout', '$scope', custCustomerCtrl]);

  function custCustomerCtrl (userService, $timeout, $scope) {
    var ccc = this;

    $timeout(function() {
      var currentUser = $scope.ac.currentUser;
      userService.currentUser(currentUser.id).then(function (user){
        ccc.user = user;
        console.log(user);
      })
    });

  }

})();
