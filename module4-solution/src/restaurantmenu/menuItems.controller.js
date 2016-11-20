(function () {
  'use strict';

  angular.module('RestaurantMenuApp')
    .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['items', 'categoryName']
  function MenuItemsController(items, categoryName) {
    var menuItems = this;

    // Create items list
    menuItems.items = items;

    // Name to display category
    menuItems.categoryName = categoryName;
  }
})();
