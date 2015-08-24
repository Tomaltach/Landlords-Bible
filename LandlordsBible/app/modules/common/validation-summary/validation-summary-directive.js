"use strict";

ArgusApp.Common
    .directive("validationSummary", ArgusValidationSummaryDirective);

function ArgusValidationSummaryDirective() {
    return {
        restrict: "E",
        scope: {
            model: "=",
            onlyAnonymous: "=" // if true will only display messages with an empty string as JSON key, otherwise display all modelState error messages
        },
        templateUrl: "/app/modules/common/directives/validation-summary/validation-summary.html",
        controller: ArgusValidationSummaryCtrl
    }
}

ArgusValidationSummaryCtrl.$inject = ["$scope"];
function ArgusValidationSummaryCtrl($scope) {
    $scope.summaryMessages = [];

    $scope.$watch("model.modelState", initializeValidationSummary);

    function initializeValidationSummary() {
        $scope.summaryMessages = [];

        _.each($scope.model.modelState, function (values, key) {
            if (!$scope.onlyAnonymous || ($scope.onlyAnonymous && key === "")) {
                $scope.summaryMessages = _.union($scope.summaryMessages, values);
            }
        });
    }
}