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
      .state('customer', {
         url: '/customer',
         abstract: true,
         templateUrl: 'app/customer/customer.html'
         //controller: ''
      })
      .state('customer.home', {
         url: '/home',
         template: '<div>Hi!</div>'
         //controller:''
      })
      // .state('customer.restaurant', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      // .state('customer.restaurant.menu', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      // .state('customer.settings', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      // .state('customer.waitlist', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })


      // RESTAURANT ROUTES
      // .state('restaurant', {
      //   url: '/restaurant',
      //   abstract: true,
      //   templateUrl: '',
      //   controller: ''
      // })
      // .state('restaurant.home', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      // .state('restaurant.queue', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
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
