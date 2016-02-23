(function() {
'use strict';

angular.module('waitrApp')
  .config(configure)

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/customer/home');

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
         templateUrl: './customer/customer.html',
         controller: 'customerCtrl',
         controllerAs: 'cc'
      })
      .state('customer.home', {
         url: '/restaurants',
         templateUrl: './customer/home/restaurants.html', 
         controller:'homeCtrl',
         controllerAs: 'hc'
      })
      .state('customer.singleRestaurant', {
        url: '/restaurants/:restaurantId',
        templateUrl: './customer/restaurant/restaurant.html',
        controller:'restaurantCtrl',
        controllerAs:'rc'
      })
      .state('customer.menu', {
        url: '/restaurants/:restaurantId/menu',
        templateUrl: './customer/menu/menu.html',
        controller:'menuCtrl',
        controllerAs: 'mc'
      })
      .state('customer.settings', {
        url: '/settings',
        templateUrl: './customer/settings/settings.html',
        controller:'settingsCtrl',
        controllerAs:'sc'
      })
      .state('customer.waitlist', {
        url: '/waitlist',
        templateUrl: './customer/waitlist/waitlist.html',
        controller:'waitlistCtrl',
        controllerAs: 'wc'
      })


      // RESTAURANT ROUTES
      .state('restaurantAdmin', {
        url: '/restaurantAdmin',
        abstract: true,
        templateUrl: 'app/restaurantAdmin/restaurantAdmin.html',
        controller: 'restaurantAdminCtrl',
        controllerAs: 'rac'
      })
      // .state('restaurant.home', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      .state('restaurant.queue', {
        url: '/queue',
        templateUrl: 'app/restaurant/resQueue/resQueueT.html',
        controller:'resQueueCtrl',
        controllerAs: 'rqc'
      })
      // .state('restaurant.profile', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      // .state('restaurant.menu', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      ;
    }

})();
