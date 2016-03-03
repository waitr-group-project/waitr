(function () {
  'use strict';

  angular.module('waitrApp')
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', 'USER_ROLES'];

  function configure($stateProvider, $urlRouterProvider, $ionicConfigProvider, USER_ROLES) {

    $ionicConfigProvider.backButton.text('').icon('ion-ios7-arrow-left');



    $urlRouterProvider.otherwise('/login');


    $stateProvider
    // LOGIN - REGISTER ROUTES
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.template.html',
        controller: 'LoginCtrl',
        controllerAs: 'logCtrl'
      })
      .state('customer-sign-up', {
        url: '/customer-registration',
        templateUrl: 'app/registration/custReg.template.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'regCtrl'
      })
      .state('restaurant-sign-up', {
        url: '/restaurant-registration',
        templateUrl: 'app/registration/restReg.template.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'regCtrl'
      })
      .state('auth-test', {
        url: '/auth-test',
        templateUrl: 'app/login/authTest.template.html',
        data: { authorizedRoles: [USER_ROLES.user] }
      })

    // CUSTOMER ROUTES
      .state('customer', {  //parent, sidenav
        url: '/customer',
        abstract: true,
        templateUrl: './app/customer/custCustomer.html',
        controller: 'custCustomerCtrl',
        controllerAs: 'ccc',
        resolve: {
          currentUser: function (authService, $state) {
            var user = authService.getUser();
            if (!user) {
              return $state.go('login');
            }
            return user;
          }
        }
      })
      .state('customer.home', {
        url: '/home',
        templateUrl: './app/customer/home/custHome.html',
        controller: 'custHomeCtrl',
        controllerAs: 'chc'
      })

    //restaurant called at home, but not home child
      .state('customer.restaurant', {
        url: '/home/restaurant/:restaurantId',
        templateUrl: './app/customer/restaurant/custRestaurant.html',
        controller: 'custRestaurantCtrl',
        controllerAs: 'crc'
      })
      .state('customer.waitlistconfirm', {
        url: '/home/restaurant/:restaurantId/waitlist-confirm',
        templateUrl: './app/customer/restaurant/custRestaurantConfirm.html',
        controller: 'custWaitListConfirmCtrl',
        controllerAs: 'cwlc'
      })
      .state('customer.settings', {
        url: '/settings',
        templateUrl: './app/customer/settings/custSettings.html',
        controller: 'custSettingsCtrl',
        controllerAs: 'csc'
      })
      .state('customer.menu', {
        url: '/home/restaurant/:restaurantId/menu',
        templateUrl: './app/customer/menu/custRestaurantMenu.html',
        controller: 'custRestaurantMenuCtrl',
        controllerAs: 'cmc',
      })
    //called in settings, but still customer child
      .state('customer.editContactInfo', {
        url: '/settings/edit-contact-info',
        templateUrl: './app/customer/settings/custEditContactInfo.html',
        controller: 'custSettingsCtrl',
        controllerAs: 'csc'
      })
      .state('customer.paymentMethods', {
        url: '/settings/payment-methods',
        templateUrl: './app/customer/settings/custPaymentMethods.html',
        controller: 'custSettingsCtrl',
        controllerAs: 'csc'
      })
      .state('customer.waitlist', {
        url: '/waitlist',
        templateUrl: './app/customer/waitlist/custWaitlist.html',
        controller: 'custWaitlistCtrl',
        controllerAs: 'cwc'
      })

    // RESTAURANT ROUTES
      .state('restaurant', {
        url: '/restaurant',
        abstract: true,
        templateUrl: './app/restaurant/restaRestaurant.html',
        controller: 'restaRestaurantCtrl',
        controllerAs: 'rrc',
        resolve: {
          restaurantInfo: function (authService, restaurantService, $state) {
            var user = authService.getUser();
            if (!user) {
              return $state.go('login');
            }
            if (!user.restaurant_id) {
              return $state.go('login');
            }
            return restaurantService.getCurrentRestaurant(user.restaurant_id)
              .then(function (restaurant) {
                return {
                  currentUser: user,
                  restaurant: restaurant
                }
              })
          }
        }
      })
      .state('restaurant.home', {
        url: '/home',
        templateUrl: './app/restaurant/restaHome/restaHome.html',
        controller: 'restaHomeCtrl',
        controllerAs: 'rhc'
      })

    //called in restaHome, but still restaurant child
      .state('restaurant.addPerson', {
        url: '/home/add-person',
        templateUrl: './app/restaurant/restaHome/restaAddPerson.html',
        controller: 'restaHomeCtrl',
        controllerAs: 'rhc'
      })
      .state('restaurant.editPerson', {
        url: '/home/edit-person/:waitlist/:person',
        templateUrl: './app/restaurant/restaHome/restaEditPerson.html',
        controller: 'restaEditCtrl',
        controllerAs: 'rec'
      })

      .state('restaurant.profile', {
        url: '/profile',
        templateUrl: './app/restaurant/restaProfile/restaProfile.html',
        controller: 'restaProfileCtrl',
        controllerAs: 'rpc'
      })
    //not child of profile, but called by profile
      .state('restaurant.menu', {
        url: '/profile/menu',
        templateUrl: './app/restaurant/restaMenu/restaMenu.html',
        controller: 'restaMenuCtrl',
        controllerAs: 'rmc'
      })
      .state('restaurant.settings', {
        url: '/settings',
        templateUrl: './app/restaurant/restaSettings/restaSettings.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
    //called in restaSettings, but still restaurant child
      .state('restaurant.editInfo', {
        url: '/settings/edit-Info',
        templateUrl: './app/restaurant/restaSettings/restaEditInfo.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
      .state('restaurant.editContact', {
        url: '/settings/edit-contact',
        templateUrl: './app/restaurant/restaSettings/restaEditContact.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
      .state('restaurant.editMenu', {
        url: '/settings/edit-menu',
        templateUrl: './app/restaurant/restaEditMenu/restaEditMenu.html',
        controller: 'restaEditMenuCtrl',
        controllerAs: 'remc',
      })
    //called in restaEditMenu, but still restaurant child
      .state('restaurant.addMenuItem', {
        url: '/settings/edit-menu/addItem',
        templateUrl: './app/restaurant/restaEditMenu/restaAddMenuItem.html',
        controller: 'restaEditMenuCtrl',
        controllerAs: 'remc'
      })
      .state('restaurant.editHours', {
        url: '/settings/edit-hours',
        templateUrl: './app/restaurant/restaSettings/restaEditHours.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      });
  }

})();
