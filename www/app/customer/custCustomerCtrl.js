(function () {
  angular
    .module('waitrApp')
    .controller('custCustomerCtrl', ['userService', '$timeout', '$scope', custCustomerCtrl]);

  function custCustomerCtrl (userService, $timeout, $scope) {
    var ccc = this;

    $timeout(function() {
      var currentUser = $scope.ac.currentUser;
      userService.currentUser(currentUser._id).then(function (user){
        ccc.user = user[0];
        //console.log('this is curr user',ccc.user);
      })
    });

  }

})();
