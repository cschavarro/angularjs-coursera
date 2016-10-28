(function () {
	"use strict";
	
	angular.module('MsgApp', [])
		.controller('MsgController', MsgController);
	
	MsgController.$inject = ['$scope', '$filter'];
	function MsgController($scope, $filter) {
		$scope.name = 'Crisitian';
		$scope.stateOfBeing = 'hungry';
		$scope.cookieCost = .45;
		
		$scope.sayMessage = function() {
			var msg = 'Cristian likes to eat snacks at night'; 
			//return $filter('uppercase')(msg);
			return msg;
		}
		
		$scope.feedCristian = function() {
			$scope.stateOfBeing = 'fed';
		}
	}
})();
