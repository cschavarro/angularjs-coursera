/**
 * Digest Modue App
 */
(function() {
	'user strict';
	
	angular.module('CounterApp', [])
	.controller('CounterController', CounterController);
	
	CounterController.$inject = ['$scope', '$timeout'];
	function CounterController($scope, $timeout) {
//		$scope.onceCounter = 0;
		$scope.counter = 0;
//		$scope.name = 'Cristian'
		
//		$scope.countOnce = function() {
//			$scope.onceCounter = 1;
//		}
		
//		$scope.showNumberOfWatchers = function() {
//			console.log('# of watchers: ',$scope.$$watchersCount);
//		};

		/* AngularJS Way */
		$scope.upCounter = function() {
			$timeout(function() {
				$scope.counter++;
				console.log('Counter Incremented');
			}, 2000);
		}
//		
		/* the $apply Way*/
//		$scope.upCounter = function() {
//			setTimeout(function() {
//				$scope.$apply(function() {
//					$scope.counter++;
//					console.log('Counter Incremented');
//				});
//			}, 2000);
//		}
//		
		/* Raw Call $digest way*/
//		$scope.upCounter = function() {
//			setTimeout(function() {
//				$scope.counter++;
//				console.log('Counter Incremented');
//				$scope.$digest();
//			}, 2000);
//		}
		
//		$scope.$watch(function() {
//			console.log('Digest Loop Fired');
//		});
		
//		$scope.$watch('onceCounter', function(newValue, oldValue) {
//			console.log('onceCounter oldValue', oldValue);
//			console.log('onceCounter newValue', newValue);
//		});
//		
//		$scope.$watch('counter', function(newValue, oldValue) {
//			console.log('counter oldValue', oldValue);
//			console.log('counter newValue', newValue);
//		});
	} 
})();