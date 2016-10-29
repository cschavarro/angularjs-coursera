(function () {
	"use strict";
	
	angular.module('MsgApp', [])
		.controller('MsgController', MsgController)
		.filter('loves', LovesFilterFactory)
		.filter('truth', TruthFilterFactory);
	
	MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];
	function MsgController($scope, $filter, lovesFilter) {
		$scope.name = 'Crisitian';
		$scope.stateOfBeing = 'hungry';
		$scope.cookieCost = .45;
		
		$scope.sayLovesMessage = function() {
			var msg = lovesFilter('Cristian likes to eat healthy snacks at night'); 
			//return $filter('uppercase')(msg);
			return msg;
		}
		
		$scope.sayMessage = function() {
			var msg = 'Cristian likes to eat healthy snacks at night'; 
			//return $filter('uppercase')(msg);
			return msg;
		}
		
		$scope.feedCristian = function() {
			$scope.stateOfBeing = 'fed';
		}
	}
	
	function LovesFilterFactory() {
		return function(input) {
			input = input || '';
			input = input.replace('likes', 'loves');
			return input;
		}
	}
	
	function TruthFilterFactory() {
		return function(input, target, replace) {
			input = input || '';
			input = input.replace(target, replace);
			return input;
		}
	}
})();
