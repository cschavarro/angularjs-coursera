/**
 * Services 
 */
(function() {
	'use strict';
	
	angular.module('ShoppingListApp', [])
		.controller('ShoppingListAddController', ShoppingListAddController)
		.controller('ShoppingListShowController', ShoppingListShowController)
		.service('ShoppingListService', ShoppingListService);
	
	// No Scope Injection but injection of service
	ShoppingListAddController.$inject = ['ShoppingListService'];
	function ShoppingListAddController(ShoppingListService) {
		var itemAdder = this;
		
		itemAdder.itemName = "";
		itemAdder.itemQuantity = "";
		
		itemAdder.addItem = function() {
			ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
		}
	}
	
	ShoppingListShowController.$inject = ['ShoppingListService'];
	function ShoppingListShowController(ShoppingListService) {
		var showList = this;
		
		showList.items = ShoppingListService.getItems();
		
		showList.removeItem = function(itemIndex) {
			ShoppingListService.removeItem(itemIndex);
		}
	}
	
	function ShoppingListService() {
		var service = this;
		
		// List of shopping Items
		var items = [];
		
		service.addItem = function(itemName, quantity) {
			var item = {
				name: itemName,
				quantity: quantity
			};
			
			items.push(item);
		};
		
		service.removeItem = function(itemIndex) {
			items.splice(itemIndex, 1);
		}
		
		service.getItems = function () {
			return items;
		};
	}
})();