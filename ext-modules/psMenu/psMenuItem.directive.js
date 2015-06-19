(function createMenuItemDirective(module){
	"use strict";
	
	module.directive("psMenuItem", directive); 
	
	function directive(){
		return {
			require: "^psMenu",
			scope: {
				label: '@',
				icon: '@',
				route: '@'
			},
			templateUrl: "ext-modules/psMenu/psMenuItem.template.html",
			link: function (scope, el, attr, ctrl) {
				
				scope.isActive = function(){
					return el === ctrl.getActiveElement();
				};
        
        scope.isVertical = function(){
          return ctrl.isVertical() || el.parents('.ps-subitem-section').length > 0;
        }
				
				el.on("click", function(e){
					e.stopPropagation();
					e.preventDefault();
					scope.$apply(function(){
						ctrl.setActiveElement(el);
						ctrl.setRoute(scope.route);
					});
				});
			}
		};
	}
}(window.angular.module("psMenu")));