/**
 * 
 */
(function() {
	'use strict';
	
	angular.module('MsgApp', [])
	.controller('MsgController', MsgController);
	
	MsgController.$inject = ['$scope'];
	function MsgController ($scope) {
		$scope.name = "Cristian";
		$scope.stateOfBeing = 'hungry';
		
		$scope.sayMessage = function() {
			return 'Cristian likes to eat snacks at night!';
		}
		
		$scope.feedCristian = function() {
			$scope.stateOfBeing = 'fed';
		}
	}
})();