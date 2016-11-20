(function () {
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$q', 'AllCategoriesUrl', 'ItemsByCategoryUrl'];
  function MenuDataService($http, $q, AllCategoriesUrl, ItemsByCategoryUrl) {
    var menuService = this;

    /**
    * Search for all avaible categories in the menu
    * @return {Promise} promise api whit all data result
    **/
    menuService.getAllCatergories = function () {
      var deferred = $q.defer();

      $http.get(AllCategoriesUrl).then(function (response) {
        deferred.resolve(response.data);
      }, function (errorResponse) {
        deferred.reject(errorResponse);
      });

      return deferred.promise;
    };

    /**
    * Search for all avaible categories in the menu
    * @param {String} categoryShortName short name of the category
    * @return {Promise} promise api whit all data result
    **/
    menuService.getItemsForCategory =  function (categoryShortName) {
      var deferred = $q.defer();
      var completeUrl = ItemsByCategoryUrl + categoryShortName;

      $http.get(completeUrl).then(function (response) {
        deferred.resolve(response.data.menu_items);
      }, function (errorResponse) {
        deferred.reject(errorResponse);
      });

      return deferred.promise;
    };
  }
})();
