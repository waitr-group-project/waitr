(function() {

  angular.module('waitrApp', ['ionic'])

    .constant('AUTH_EVENTS', {
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })

    .constant('USER_ROLES', {
      user: 'user',
      restaurant: 'restaurant'
    })

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

    .run(function($rootScope, AUTH_EVENTS, AuthFactory, $timeout) {
      // var user = AuthFactory.getUser();
      // if (user) {
      //   $timeout(function(){
      //     $rootScope.$broadcast('currentUser', user);
      //   });
      // }
      $rootScope.$on('$stateChangeStart', function (event, next) {
        if (next.data) {
          var authorizedRoles = next.data.authorizedRoles;
          if (!AuthFactory.isAuthorized(authorizedRoles)) {
            event.preventDefault();
            if (AuthFactory.isAuthenticated()) {
              // user is not allowed
              toastr.error('Not Allowed!');
              $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            } else {
              // user is not logged in
              toastr.error('Not Logged In.');
              $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
          }
        }
      });

    })

    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('authInterceptorService');
    });

})();
