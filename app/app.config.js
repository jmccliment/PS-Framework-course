(function registerAppConfig(module) {
    "use strict";

    module.config(function ($provide) {
        $provide.decorator("$exceptionHandler", exceptionHandler);
    });

    exceptionHandler.$inject = ["$delegate"];

    function exceptionHandler($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            alert(exception.message);
        }
    }

}(window.angular.module("app")));