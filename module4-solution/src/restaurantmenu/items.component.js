(function () {
  'use strict';

  angular.module('RestaurantMenuApp')
    .component('itemsList', {
      templateUrl : 'src/restaurantmenu/templates/items.template.html',
      bindings : {
        items : '<'
      }
    });
})();
