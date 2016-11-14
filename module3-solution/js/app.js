(function() {
	'use strict';

	angular.module('NarrowItDownApp', []).controller('NarrowItDownController',
			NarrowItDownController).service('MenuSearchService',
			MenuSearchService).directive('foundItems', FoundItems).constant(
			'ApiUrl', 'http://davids-restaurant.herokuapp.com/menu_items.json');

	function FoundItems() {
		var ddo = {
			templateUrl : 'menuList.html',
			scope : {
				founded : '<',
				onRemove : '&'
			},
			controller : ItemsDirectiveContoller,
			controllerAs : 'items',
			bindToController : true
		};

		return ddo;
	}

	function ItemsDirectiveContoller() {
		var items = this;

		items.warning = 'Nothing found!';
		items.showMessage = function() {
			return items.founded && items.founded.length === 0;
		};
		
		items.showPanel = function() {
			return items.founded;
		};
	}

	NarrowItDownController.$inject = [ 'MenuSearchService' ];
	function NarrowItDownController(MenuSearchService) {
		var narrow = this;

		narrow.searchTerm = '';
		narrow.found;
		narrow.noMenuItems;

		narrow.narrowItDown = function() {
			if(narrow.searchTerm && narrow.searchTerm.trim().lenght !== 0) {
				var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
				
				// Look for the result array in the promise
				promise.then(function(result) {
					narrow.found = result;
				});
			} else {
				narrow.found = [];
			}
		};

		narrow.removeMenuItem = function(itemIndex) {
			narrow.found.splice(itemIndex, 1);
		}
	}

	MenuSearchService.$inject = [ '$http', 'ApiUrl' ];
	function MenuSearchService($http, ApiUrl) {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			return $http.get(ApiUrl).then(
					function(result) {
						// Checks if the result is valid
						if (result) {
							var menuItemsRetrieve = result.data.menu_items;
							var foundMenuItems = [];

							// Search the menu items tha matches the search term
							for (var i = 0; i < menuItemsRetrieve.length; i++) {
								var menuItem = menuItemsRetrieve[i];
								if (menuItem.description
										&& menuItem.description.toLowerCase()
												.indexOf(searchTerm) !== -1) {
									foundMenuItems.push(menuItem);
								}
							}

							// returns matchin menu items
							return foundMenuItems;
						}
					});
		};
	}
})();
