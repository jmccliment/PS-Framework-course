(function registerMenuController($, angular, module){
	"use strict";
	
	controller.$inject = ["$scope", "$rootScope"];
	
	module.controller("psMenuController", controller);
	
	function controller($scope, $rootScope) {
		
		$scope.showMenu = true;
		$scope.isVertical = true;
    
    
		this.getActiveElement = function() {
			return $scope.activeElement;
		};
		this.setActiveElement = function(el) {
			$scope.activeElement = el;
		};
    this.isVertical = function(){
      return $scope.isVertical;
    };
		this.setRoute = function(route) {
			$rootScope.$broadcast("ps-menu-item-selected-event", {route: route});
		};
		
		$scope.$on("ps-menu-show", function(evt, data){
			$scope.showMenu = data.show;
      $scope.isVertical = data.isVertical;
      $scope.allowHorizontalToggle = data.allowHorizontalToggle;
		});
    
    $scope.toggleMenuOrientation = function(){
      
      if($scope.openMenuScope) {

        $scope.openMenuScope.closeMenu();
      }
      $scope.isVertical = !$scope.isVertical;
      $rootScope.$broadcast("ps-menu-orientation-changed-event", { isMenuVertical: $scope.isVertical });
    };
    
    angular.element(document).bind('click', function(e){
      if($scope.openMenuScope && !$scope.isVertical) {
        if($(e.target).parent().hasClass('ps-selectable-item'))
          return;
          $scope.$apply(function(){
            $scope.openMenuScope.closeMenu();
          });
          e.preventDefault();
          e.stopPropagation();
      }
    });
    
    this.setOpenMenuScope = function (scope) {
      $scope.openMenuScope = scope;
    }
	}
}(window.jQuery, window.angular, window.angular.module("psMenu")));