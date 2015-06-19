(function createFrameworkDirective(module){
	"use strict";
	
	module.directive("psFramework", directive);
	
	function directive(){
		return {
			transclude: true,
			scope: {
				title: '@',
				subtitle: '@',
				iconFile: '@'
			},
			controller: "psFrameworkController",
			controllerAs: "vm",
			templateUrl: "ext-modules/psFramework/psFramework.template.html"
		}
	}
}(window.angular.module("psFramework")));