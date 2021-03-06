(function registerFrameworkController($, module){
	"use strict";
	
	controller.$inject = ["$scope", "$window", "$timeout", "$rootScope", "$location"];
	
	module.controller("psFrameworkController", controller);
	
	function controller($scope, $window, $timeout, $rootScope, $location){
		
		$scope.isMenuVisible = true;
		$scope.isMenuButtonVisible = true;
    $scope.isMenuVertical = true;
		
		$scope.$on("ps-menu-item-selected-event", function(evt, data){
			$scope.routeString = data.route;
      $location.path(data.route);
			checkWidth();
			broadcastMenuState();
		});
    
    $scope.$on("ps-menu-orientation-changed-event", function(evt, data){
      $scope.isMenuVertical = data.isMenuVertical;
    });
		
		$($window).on("resize.psFramework", function(){
			$scope.$apply(function(){
				checkWidth();
				broadcastMenuState();
			});
		});
		
		$scope.$on("$destroy", function(){
			$($window).off("resize.psFramework");
		});
		
		var checkWidth = function(){
			var width = Math.max($($window).width(), $window.innerWidth);
			$scope.isMenuVisible = (width >= 768);
			$scope.isMenuButtonVisible = !$scope.isMenuVisible;
		};
		
		$scope.menuButtonClicked = function(){
			$scope.isMenuVisible = !$scope.isMenuVisible;

			broadcastMenuState();
		};
		
		var broadcastMenuState = function(){
			$rootScope.$broadcast("ps-menu-show", {
				show: $scope.isMenuVisible,
        isVertical: $scope.isMenuVertical,
        allowHorizontalToggle: !$scope.isMenuButtonVisible
			});	
		};
		
		$timeout(function(){
			checkWidth();
		}, 0);
	}
}(window.jQuery, window.angular.module("psFramework")));