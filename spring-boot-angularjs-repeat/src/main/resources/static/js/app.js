/**
 * Ng-Repeat Shopping list 
 */
(function() {
	'use strict';
	
	var shoppingList1 = ['Milk', 'Donuts', 'Cookies', 'Chocolate', 'Peanut Butter',
		'Pepto Bismol', 'Pepto Bismol (Chocolate flavor)', 'Pepto Bismol (Cookie flavor)'];
	
	var shoppingList2 = [
		{
			name: 'Milk', 
			quantity: '2'
		}, 
		{
			name: 'Donuts', 
			quantity: '200'
		}, 
		{
			name: 'Cookies', 
			quantity: '300'
		}, 
		{
			name: 'Chocolate', 
			quantity: '5'
		}
	];
	
	angular.module('ShoppingList', [])
		.controller('ShoppingListController', ShoppingListController);
	
	ShoppingListController.$inject = ['$scope'];
	function ShoppingListController($scope) {
		$scope.shoppingList1 = shoppingList1;
		$scope.shoppingList2 = shoppingList2;
		
		$scope.addToList = function() {
			$scope.shoppingList2.push({name: $scope.name, quantity: $scope.quantity})
			$scope.name = "";
			$scope.quantity = "";
		}
	}
})();