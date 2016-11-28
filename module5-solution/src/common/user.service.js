(function () {
  'use strict';

  angular.module('common')
  .service('UserService', UserService);

  UserService.$inject = ['$q','$http', 'ApiPath']
  function UserService($q, $http, ApiPath) {
    var service = this;

    /**
    * Saves the user
    * @param {Object} user user to save
    **/
    service.saveUser = function (user) {
      if (user) {
        service.signedUpUser = user;
      }
    };

    /**
    * Rerturn the signe up user, otherwise {undefined}
    * @return {Object|undefined} signed up user
    **/
    service.getSignedUpUser = function () {
      return service.signedUpUser;
    }

    /**
    * Checks if a dish exits
    * @return {Promise} promise with result
    **/
    service.checkDish = function (itemShortName) {
      var deferred = $q.defer();
      var itemUrl = ApiPath + '/menu_items/'+ itemShortName + '.json';

      $http.get(itemUrl).then(function (response) {
        deferred.resolve(response.data);
      }, function (response) {
        var errorResponse = { error: true, errorMsj: response.error };
        deferred.reject(errorResponse);
      });

      return deferred.promise;
    };
  }
})()
