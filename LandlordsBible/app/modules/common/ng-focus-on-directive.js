"use strict";

// Taken from here: http://stackoverflow.com/a/18295416/413785
ArgusApp.Common
    .directive("ngFocusOn", ArgusNgFocusOnDirective)
    .factory("FocusOn", ArgusFocusOnFactory);

function ArgusNgFocusOnDirective() {
    return function (scope, elem, attr) {
        scope.$on("ngFocusOn", function (e, name) {
            if (name === attr.ngFocusOn) {
                elem[0].focus();
            }
        });
    };
}

ArgusFocusOnFactory.$inject = ["$rootScope", "$timeout"];
function ArgusFocusOnFactory($rootScope, $timeout) {
    return function (name) {
        if (name) {
            $timeout(function () {
                $rootScope.$broadcast("ngFocusOn", name);
            });
        }
    };
}
