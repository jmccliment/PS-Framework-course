(function createMenuDirective(module){
	"use strict";
	
	module.directive("psMenu", directive);
	
  directive.$inject = ["$timeout"]
  
	function directive($timeout){
		return {
			scope: {
				
			},
			transclude: true,
			templateUrl: "ext-modules/psMenu/psMenu.template.html",
			controller: "psMenuController",
			link: function(scope, el, attr) {
        var item = el.find('.ps-selectable-item:first');
        $timeout(function () {
          item.trigger('click');
        });				
			}
		};
	}
}(window.angular.module("psMenu")));