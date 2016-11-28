(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.template.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['MenuService', '$stateParams', function (MenuService, $stateParams) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.user', {
      url: '/user',
      templateUrl: 'src/public/user/user.template.html',
      controller: 'UserController',
      controllerAs: 'userCtrl',
      resolve: {
        user: ['UserService', function (UserService) {
          return UserService.getSignedUpUser();
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/user/signup.template.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    });
}
})();
