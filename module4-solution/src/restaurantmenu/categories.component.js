(function () {
  'use strict';

  angular.module('RestaurantMenuApp')
    .component('categoriesList', {
      templateUrl : 'src/restaurantmenu/templates/categories.template.html',
      bindings : {
        categories : '<'
      }
    });
})();
