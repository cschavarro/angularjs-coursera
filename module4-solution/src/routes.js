(function () {
'use strict';

angular.module('RestaurantMenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
      url: '/',
      templateUrl: 'src/restaurantmenu/templates/home.template.html'
    })

  // Caregories View
  .state('menuCategories', {
    url: '/menu-categories',
    templateUrl: 'src/restaurantmenu/templates/menu-categories.template.html',
    controller: 'MenuCategoriesController as menuCategories',
    resolve: {
      categories : [
        'MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCatergories();
        }
      ]
    }
  })

  // Caregories Items
  .state('menuItems', {
    url: "/menu-items/{categoryShortName}/{categoryName}",
    templateUrl: 'src/restaurantmenu/templates/menu-items.template.html',
    controller: 'MenuItemsController as menuItems',
    params: {
      categoryShortName: null,
      categoryName: null
    },
    resolve: {
      items : [
        'MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }
      ],
      categoryName : ['$stateParams', function ($stateParams) {
          return $stateParams.categoryName;
        }
      ]
    }
  });
}

})();
