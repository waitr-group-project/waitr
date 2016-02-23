(function() {
'use strict';

angular.module('waitrApp')
  .config(configure);

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
         templateUrl: 'app/customer/customer.html',
         controller: 'customerCtrl',
         controllerAs: 'cc'
      })
      .state('customer.home', {
         url: '/home',
         templateUrl: 'app/customer/home/home.html'
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
       .state('customer.setting', {
         url: '/setting',
         templateUrl: 'app/customer/setting/setting.html'
         //controller:''
       })
      .state('customer.edit', {
        url: '/setting/edit',
        templateUrl: 'app/customer/editContact/editContact.html'
        //controller:''
      })
       .state('customer.waitlist', {
         url: '/waitlist',
         templateUrl: 'app/customer/waitList/waitList.html'
         //controller:''
       })


      // RESTAURANT ROUTES
      //.state('restaurant', {
      //  url: '/restaurant',
      //  abstract: true,
      //  templateUrl: 'app/restaurant/restaurant.html',
      //  controller: 'restaurantCtrl',
      //  controllerAs: 'rc'
      //})
      // .state('restaurant.home', {
      //   url: '',
      //   templateUrl: '',
      //   controller:''
      // })
      //.state('restaurant.queue', {
      //  url: '/queue',
      //  templateUrl: 'app/restaurant/resQueue/resQueueT.html',
      //  controller:'resQueueCtrl',
      //  controllerAs: 'rqc'
      //})
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
