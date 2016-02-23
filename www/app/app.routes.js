(function() {
'use strict';

angular.module('waitrApp')
  .config(configure)

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/customer/restaurantsList');

    $stateProvider
      // LOGIN - REGISTER ROUTES
      // .state('login', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      // .state('customer-sign-up', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      // .state('restaurant-sign-up', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })


// CUSTOMER ROUTES
      .state('customer', {  //parent, sidenav
         url: '/customer',
         abstract: true,
         templateUrl: './app/customer/customer.html',
         controller: 'customerCtrl',
         controllerAs: 'cc'
      })
      .state('customer.home', {
         url: '/restaurantsList',
         templateUrl: './app/customer/home/restaurantsList.html', 
         controller:'homeCtrl',
         controllerAs: 'hc'
      })
      //restaurant child-that-has-children thingamajigger route
      .state('customer.restaurant', {
        url: '/restaurants/:restaurantId',
        templateUrl: './app/customer/restaurant/restaurant.html',
        controller:'restaurantCtrl',
        controllerAs:'rc'
      })
      //restaurant children
      .state('customer.restaurant.desc', {
        url: '/description',
        templateUrl: './app/customer/restaurant/restaurantDesc.html',
      })
      .state('customer.restaurant.call', {
        url: '/call',
        templateUrl: './app/customer/customer.restaurant/restaurantCall.html',
      })
      .state('customer.restaurant.menu', {
        url: '/menu',
        templateUrl: './app/customer/restaurant/restaurantMenu.html',
      })
      .state('customer.restaurant.website', {
        url: '/website',
        templateUrl: './app/customer/restaurant/restaurantWebsite.html',
      })
      
      .state('customer.settings', {
        url: '/settings',
        templateUrl: './app/customer/settings/settings.html',
        controller:'settingsCtrl',
        controllerAs:'sc'
      })
      //called in settings, but still customer child
      .state('customer.editContactInfo', {
        url: '/settings/edit-contact-info',
        templateUrl: './app/customer/settings/editContactInfo.html',
        controller:'settingsCtrl',
        controllerAs:'sc'
      })
      .state('customer.paymentMethods', {
        url: '/settings/payment-methods',
        templateUrl: './app/customer/settings/paymentMethods.html',
        controller:'settingsCtrl',
        controllerAs:'sc'
      })
            
      .state('customer.waitlist', {
        url: '/waitlist',
        templateUrl: './app/customer/waitlist/waitlist.html',
        controller:'waitlistCtrl',
        controllerAs: 'wc'
      })


// RESTAURANT ROUTES
      .state('restaAdmin', {
        url: '/admin/:restaurantId',
        abstract: true,
        templateUrl: './app/restaurant/restaAdmin.html',
        controller: 'restaAdminCtrl',
        controllerAs: 'rac'
      })
      .state('restaAdmin.home', {
        url: '/waitlist',
        templateUrl: './app/restaurant/restaHome/restaWaitlist.html',
        controller: 'restaHomeCtrl',
        controllerAs: 'rhc'
      })
    //called in restaWaitlist, but still restaAdmin child
      .state('restaAdmin.addPerson', {
        url: '/waitlist/add-person',
        templateUrl: './app/restaurant/restaHome/restaWaitlist.html',
        controller: 'restaHomeCtrl',
        controllerAs: 'rhc'
      })      
      .state('restaAdmin.editPerson', {
        url: '/waitlist/edit-person',
        templateUrl: './app/restaurant/restaHome/restaWaitlist.html',
        controller: 'restaHomeCtrl',
        controllerAs: 'rhc'
      })
      
    //child-of-restaAdmin-that-has-children thingamajigger route
      .state('restaAdmin.profile', {  
        url: '/profile',
        templateUrl: './app/restaurant/restaProfile/restaProfile.html',
        controller: 'restaProfileCtrl',
        controllerAs: 'rpc'
      })
    //profile children
      .state('restaAdmin.profile.desc', {
        url: '/description',
        templateUrl: './app/restaurant/restaProfile/restaDesc.html',
      })
      .state('restaAdmin.profile.call', {
        url: '/call',
        templateUrl: './app/restaurant/restaProfile/restaCall.html',
      })
      .state('restaAdmin.profile.menu', {
        url: '/menu',
        templateUrl: './app/restaurant/restaProfile/restaMenu.html',
      })
      .state('restaAdmin.profile.website', {
        url: '/website',
        templateUrl: './app/restaurant/restaProfile/restaWebsite.html',
      })
      
      .state('restaAdmin.settings', {
        url: '/settings',
        templateUrl: './app/restaurant/restaSettings/restaSettings.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
    //called in restaSettings, but still restaAdmin child
      .state('restaAdmin.editDesc', {
        url: '/settings/edit-description',
        templateUrl: './app/restaurant/restaSettings/restaEditDesc.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
      .state('restaAdmin.editCall', {
        url: '/settings/edit-call',
        templateUrl: './app/restaurant/restaSettings/restaEditCall.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
      .state('restaAdmin.profile.editMenu', {
        url: '/settings/edit-menu',
        templateUrl: './app/restaurant/restaSettings/restaEditMenu.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
      .state('restaAdmin.editWebsite', {
        url: '/settings/edit-website',
        templateUrl: './app/restaurant/restaSettings/restaEditWebsite.html',
        controller: 'restaSettingsCtrl',
        controllerAs: 'rsc'
      })
    }

})();
