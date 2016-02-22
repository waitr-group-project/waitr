angular.module("waitrApp").directive("navbar", function($state) {
  return {
    template: ` <ion-header-bar class="bar-balanced">
                  <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
                </ion-header-bar>`,
    restrict: "E",
    scope: {},

    link: function(scope, element, attrs) {
      scope.route = $state.current.name;
    }
  }
})
