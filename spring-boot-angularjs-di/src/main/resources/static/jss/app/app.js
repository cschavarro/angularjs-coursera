/**
 * 
 */
(function () {
	"use strict";
	
	angular.module('DIApp', [])
	.controller('DIController', DIController);
	
	DIController.$inject = ['$scope', '$filter']; // Important to Minification
	function DIController ($scope, $filter, $injector) {
		$scope.name = 'Cristian';
		
		$scope.upper = function() {
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		};
	}
})();