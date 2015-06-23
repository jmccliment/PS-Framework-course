(function registerDashboardDirective(module){
  "use strict";
  
  module.directive("wwaLocations", directive);
  
  function directive() {
    return {
      scope: {},
      template: "<h1>Locations Page</h1>"
    };
  }
}(window.angular.module("app")));