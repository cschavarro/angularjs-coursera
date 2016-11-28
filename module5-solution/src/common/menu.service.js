(function () {
  'use strict';

  angular.module('common')
  .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiPath']
  function MenuService($http, ApiPath) {
    var service = this;

    service.getCategories = function () {
      var categoriesUrl = ApiPath + '/categories.json';
      return $http.get(categoriesUrl).then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      var config = {};
      var itemsUrl = ApiPath + '/menu_items.json';
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(itemsUrl, config).then(function (response) {
        return response.data;
      });
    }
  }
})();
