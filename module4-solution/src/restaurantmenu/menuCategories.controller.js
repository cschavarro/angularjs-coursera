(function () {
  'use strict';

  angular.module('RestaurantMenuApp')
    .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['categories'];
  function MenuCategoriesController(categories) {
    var menuCategories = this;

    // Categories
    menuCategories.categories = categories;
  }
})();
