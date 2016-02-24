(function () {
  angular
    .module('waitrApp')
    .controller('custHomeCtrl', [custHomeCtrl]);

  function custHomeCtrl () {
    var chc = this;

    chc.data = [
      {
        img: 'http://provorestaurantreviews.files.wordpress.com/2010/09/j-dawg.png',
        name: 'J Dawgs',
        type: 'Hot Dog Restaurant',
        address: '858 700 East, Provo, UT 84606',
        wait: '10'
      },
      {
        img: 'http://provorestaurantreviews.files.wordpress.com/2010/09/j-dawg.png',
        name: 'Dan',
        type: 'Abc Restaurant',
        address: '123 400 East, Salt Lake City, UT 84606',
        wait: '05'
      },
      {
        img: 'http://provorestaurantreviews.files.wordpress.com/2010/09/j-dawg.png',
        name: 'Katie',
        type: 'cda Restaurant',
        address: '321 300 East, Salt Lake City, UT 84606',
        wait: '30'
      },
      {
        img: 'http://provorestaurantreviews.files.wordpress.com/2010/09/j-dawg.png',
        name: 'Berry',
        type: '123 Restaurant',
        address: '123 400 Berry, Salt Lake City, UT 12345',
        wait: '12'
      }
    ]



  }

})();
