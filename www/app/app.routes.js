(function() {
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
         controllerAs: 'ccc'
      })
      .state('customer.home', {
         url: '/home',
         templateUrl: './app/customer/home/custHome.html',
         controller:'custHomeCtrl',
         controllerAs: 'chc'
      })

      //restaurant child-that-has-children thingamajigger route
      .state('customer.restaurant', {
        url: '/home/restaurant/:restaurantId',  // /:restaurantId
        templateUrl: './app/customer/restaurant/custRestaurant.html',
        controller: 'custRestaurantCtrl',
        controllerAs:'crc'
      })

      //restaurant children
      .state('customer.restaurant.desc', {
        url: '/description',
        templateUrl: './app/customer/restaurant/custRestaurantDesc.html',
      })
      .state('customer.restaurant.hours', {
        url: '/hours',
        templateUrl: './app/customer/restaurant/custRestaurantHours.html',
      })

      //not restaurant child, but called by restaurant
      .state('customer.menu', {
        url: '/home/restaurant/menu',
        templateUrl: './app/customer/restaurant/custRestaurantMenu.html',
        controller: 'custRestaurantCtrl',
        controllerAs: 'crc'
      })
      .state('customer.settings', {
        url: '/settings',
        templateUrl: './app/customer/settings/custSettings.html',
        controller:'custSettingsCtrl',
        controllerAs:'csc'
      })

      //called in settings, but still customer child
      .state('customer.editContactInfo', {
        url: '/settings/edit-contact-info',
        templateUrl: './app/customer/settings/custEditContactInfo.html',
        controller:'custSettingsCtrl',
        controllerAs:'csc'
      })
      .state('customer.paymentMethods', {
        url: '/settings/payment-methods',
        templateUrl: './app/customer/settings/custPaymentMethods.html',
        controller:'custSettingsCtrl',
        controllerAs:'csc'
      })
      .state('customer.waitlist', {
        url: '/waitlist',
        templateUrl: './app/customer/waitlist/custWaitlist.html',
        controller:'custWaitlistCtrl',
        controllerAs: 'cwc'
      })

      // RESTAURANT ROUTES
      .state('restaurant', {
        url: '/restaurant',  // /:restaurantId
        abstract: true,
        templateUrl: './app/restaurant/restaRestaurant.html',
        controller: 'restaRestaurantCtrl',
        controllerAs: 'rrc'
      })
      .state('restaurant.home', {
        url: '/home',
        templateUrl: './app/restaurant/restaHome/restaHome.html',
        controller: 'restaHomeCtrl',
        controllerAs: 'rhc'
      })

      //called in restaWaitlist, but still restaurant child
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

      //child-of-restaurant-that-has-children thingamajigger route
      .state('restaurant.profile', {
        url: '/profile',
        templateUrl: './app/restaurant/restaProfile/restaProfile.html',
        controller: 'restaProfileCtrl',
        controllerAs: 'rpc'
      })

      //profile children
      .state('restaurant.profile.desc', {
        url: '/description',
        templateUrl: './app/restaurant/restaProfile/restaDesc.html',
      })
      .state('restaurant.profile.hours', {
        url: '/hours',
        templateUrl: './app/restaurant/restaProfile/restaHours.html',
      })

      //not child of profile, but still called by profile
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
        templateUrl: './app/restaurant/restaSettings/restaEditMenu.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
      .state('restaurant.editHours', {
        url: '/settings/edit-hours',
        templateUrl: './app/restaurant/restaSettings/restaEditHours.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })

      // Dan I don't think we need these.
      .state('restaurant.menu', {
        url: '/profile/menu',
        templateUrl: './app/restaurant/restaProfile/restaMenu.html',
        controller: 'restaProfileCtrl',
        controllerAs: 'rpc'
      })
      .state('restaurant.editWebsite', {
        url: '/settings/edit-website',
        templateUrl: './app/restaurant/restaSettings/restaEditWebsite.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      });
    }
})

();
