(function createDashboardDirective(module){
  "use strict";
  
  module.directive("psDashboard", directive);
  
  function directive(){
    return {
      templateUrl: "ext-modules/psDashboard/psDashboard.template.html"
    }
  }
}(window.angular.module("psDashboard")))