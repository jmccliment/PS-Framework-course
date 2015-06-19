(function createMenuDirective(module){
	"use strict";
	
	module.directive("psMenu", directive);
	
	function directive(){
		return {
			scope: {
				
			},
			transclude: true,
			templateUrl: "ext-modules/psMenu/psMenu.template.html",
			controller: "psMenuController",
			link: function(scope, el, attr) {
				
			}
		};
	}
}(window.angular.module("psMenu")));