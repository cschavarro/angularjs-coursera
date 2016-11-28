(function () {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', 'UserService'];
  function SignupController($scope, UserService) {
    var $ctrl = this;

    $ctrl.signUpUser = function () {
      if ($ctrl.user) {
        // Checks for dish
        if ($ctrl.user.favoriteDish) {
          var promise = UserService.checkDish($ctrl.user.favoriteDish.toUpperCase());

          // Resolve promise result
          promise.then(function (data) {
            $ctrl.user.favoriteDishItem = data;
            UserService.saveUser($ctrl.user);

            // Final toches
            $ctrl.signUpSuccess = true;
            $ctrl.user = angular.copy({});

            // Resets Form
            $scope.userForm.$setPristine();
            $scope.userForm.$setUntouched();
          }, function (error) {
            $ctrl.signUpFailed = true;
          });
        }
      }
    }
  }
})()
