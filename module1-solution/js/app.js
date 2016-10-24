/**
 * Module1 Solution App Code 
 */
(function () {
	"use strict";
	
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope) {
		// Define Var Model
		$scope.itemsToEat = '';
		$scope.message = '';
		$scope.style = '';
		
		// Define Action to Check items
		$scope.checkItemsToEat = function() {
			// Validate Empty items
			if (!$scope.itemsToEat) {
				$scope.style = 'error'; // Set style to wrong
				$scope.message = 'Please enter data first';
				return;
			}
			
			// Split items to eat
			var itemsToEatArray = $scope.itemsToEat.split(',');
			
			// Check every item
			var numberOfItems = 0;
			$scope.message = '';
			for(var i = 0; i < itemsToEatArray.length; i++) {
				var itemToEat = itemsToEatArray[i].trim(); 
				if (itemToEat) {
					// Add to count if not empty
					numberOfItems++;
				}					
			}
			
			// Check if there are elements less than 3
			if (numberOfItems <= 3) {
				$scope.message = 'Enjoy!';
			} else {
				$scope.message = 'Too Much!';
			}
			
			// Set style to correct
			$scope.style = 'correct';
		};
	};
})();
