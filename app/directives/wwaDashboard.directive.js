(function registerDashboardDirective(module){
  "use strict";
  
  module.directive("wwaDashboard", directive);
  
  function directive() {
    return {
      scope: {
      },
      template: "<ps-dashboard></ps-dashboard>",
      link: function dashboardDirectiveLink(scope) {
        
        scope.title = "My First Dashboard";
        
        scope.gridsterOpts = {
          columns: 12,
          margins: [20, 20],
          outerMargin: false,
          pushing: true,
          floating: true,
          swapping: false
        };
        
        scope.widgets = [
          {
            sizeX: 3
            , sizeY: 3
            , row: 0
            , col: 0,
            title: "First"
          },
          {
            sizeX: 2,
            sizeY: 4,
            row: 0,
            col: 5,
            title: "Second"
          }
        ];
      }
    };
  }
}(window.angular.module("app")));