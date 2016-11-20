(function () {
  'use strict';

  angular.module('Data', [])
    // Endpoint for all categories
    .constant('AllCategoriesUrl', 'https://davids-restaurant.herokuapp.com/categories.json')

    // Endpoint  for the items belogning to a category (Requires to append category shortName)
    .constant('ItemsByCategoryUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');
})();
