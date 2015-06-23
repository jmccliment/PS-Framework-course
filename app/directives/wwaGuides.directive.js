(function registerDashboardDirective(module){
  "use strict";
  
  module.directive("wwaGuides", directive);
  
  function directive() {
    return {
      scope: {},
      template: "<h1>Guides Page</h1>"
    };
  }
}(window.angular.module("app")));