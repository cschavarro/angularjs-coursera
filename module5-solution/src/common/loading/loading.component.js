(function () {
  'use strict';

  angular.module('common')
  .component('loading', {
    template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
    controller: LoadingController
  });

  LoadingController.$inject = ['$rootScope']
  function LoadingController($rootScope) {
    var $ctrl = this;
    var listener;

    $ctrl.$onInit = function () {
      $ctrl.show = false;
      listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
    };

    $ctrl.$onDestroy = function () {
      listener(); // Destroys the listener
    };

    // Event Function
    var onSpinnerActivate = function (event, data) {
      $ctrl.show = data.on;
    };
  }
})();
