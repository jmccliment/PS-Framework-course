(function configureRouting(module){
  "use strict";
  
  routing.$inject = ["$routeProvider"];
  
  module.config(routing);
  
  function routing($routeProvider) {
    var routes = [
      {
        url: "/dashboard",
        config: {
          template: "<wwa-dashboard></wwa-dashboard>"
        }
      },
      {
        url: "/locations",
        config: {
          template: "<wwa-locations></wwa-locations>"
        }
      },
      {
        url: "/guides",
        config: {
          template: "<wwa-guides></wwa-guides>"
        }
      }
    ];
    
    routes.forEach(function registerRoute(route){
      $routeProvider.when(route.url, route.config);
    });
    
    $routeProvider.otherwise({redirectTo: "/dashboard"});
  }
  
}(window.angular.module("app")));