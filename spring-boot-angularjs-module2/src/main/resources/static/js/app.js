/**
 * Module 2: Shopping List 
 */
(function() {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.provider('ShoppingListCheckOffService', ShoppingListCheckOffProvider)
		.config(ConfigItems);
	
	/* Controller to handle the Shopping List to Buy */
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuy = this;
		
		// Get Items to Buy
		toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
		
		// Function to buy an item
		toBuy.buyItem = function(itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		}
		
		// Checks if all items are bought
		toBuy.AllItemsBought = function() {
			return toBuy.itemsToBuy && toBuy.itemsToBuy.length === 0;
		}
	}
	
	/* Controller to handle the Bought Shopping List */
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;
		
		bought.itemsBought = ShoppingListCheckOffService.getItemsBought();
		
		// Check if no items have been bought
		bought.noItemsBought = function() {
			return bought.itemsBought && bought.itemsBought.length === 0;
		}
	}
	
	/* Service to control the shopping list operation */
	var ShoppingListCheckOffService = (function (itemsToBuy) {
		var instance;
		
		function ShoppingListCheckOffService(itemsToBuy) {
			var service = this;
			
			var itemsToBuy = itemsToBuy;
			var itemsBought = [];
			
			/**
			 * Got the items to buy
			 */
			service.getItemsToBuy = function () {
				return itemsToBuy;
			}
			
			/**
			 * Got the items bought
			 */
			service.getItemsBought = function () {
				return itemsBought;
			}
			
			/**
			 * Action to buy item
			 */
			service.buyItem = function (itemIndex) {
				var boughtItem = itemsToBuy[itemIndex];
				
				// Remove item of itemsToBuy
				itemsToBuy.splice(itemIndex, 1);
				
				// Add item to itemsBought
				itemsBought.push(boughtItem);
			}
		}
		
		// Manage the singleton
		return {
			getInstance: function(items) {
				if (!instance) {
					instance = new ShoppingListCheckOffService(items);
				}
				return instance;
			}
		};
	})();
	
	ConfigItems.$inject = ['ShoppingListCheckOffServiceProvider'];
	function ConfigItems(ShoppingListCheckOffServiceProvider) {
		ShoppingListCheckOffServiceProvider.defaults.items = [
			{
				name: 'Cookies',
				quantity: "2"
			},
			{
				name: 'Milk',
				quantity: "1"
			},
			{
				name: 'Candy',
				quantity: "5"
			},
			{
				name: 'Beer',
				quantity: "1"
			},
			{
				name: 'Water',
				quantity: "1"
			}
		];
	}
	
	/* Provider to the Shopping List Service */
	function ShoppingListCheckOffProvider() {
		var provider = this;
		
		provider.defaults = {
			items: [{
				name: 'Cookies',
				quantity: '2'
			}]
		};
		
		/* Function Factory for the service */
		provider.$get = function() {
			var shoppingList = ShoppingListCheckOffService.getInstance(provider.defaults.items);
			
			return shoppingList;
		}
	}
})();