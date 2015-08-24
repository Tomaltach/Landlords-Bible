"use strict";

ArgusApp.Common
    .directive("ngConfirmClick", ArgusNgConfirmClickDirective);

function ArgusNgConfirmClickDirective() {
    return {
        priority: -1,
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function (e) {
                var message = attrs.ngConfirmClick;
                if (message && !confirm(message)) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                }
            });
        }
    };
}