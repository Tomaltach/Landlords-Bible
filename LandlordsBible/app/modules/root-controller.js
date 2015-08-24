"use strict";

ArgusApp.Common
    .controller("RootCtrl", ArgusRootCtrl);

ArgusRootCtrl.$inject = ["$scope", "$rootScope", "$state", "$sce", "UserService", "ErrorService"];
function ArgusRootCtrl($scope, $rootScope, $state, $sce, UserService, ErrorService) {
    // App-wide $scoped vars, listeners, functions here (lookups, user object, etc..)
    $rootScope.currentUser = {};
    $scope.stateIncludes = $state.includes;

    (function () {
        getCurrentUser();
    })();

    $scope.$on("user-logged-in", function (event, error) {
        getCurrentUser();
        $state.go("root.standard.home");
    });

    $scope.$on("user-logged-out", function (event, error) {
        $rootScope.currentUser = {};
        $state.go("root.standard.login");
        $rootScope.$broadcast("root-user-object-changed");
    });

    $scope.$on("error-message", function (event, error) {
        ErrorService.showMessage(error.message, error.status);
    });

    $scope.$on("unauthorized-request", UserService.onUnauthorizedRequest);

    // NOTICE: this is a temporary ui-router bugfix 
    // SEE: https://github.com/angular-ui/ui-router/issues/178#issuecomment-63555776
    // The problem is that using transitionTo together with "notify: false" prevens route view reloading on "$state.go"
    var deRegisterInterceptor = $scope.$on("$stateChangeStart", function (e, toState, toParams) {
        e.preventDefault();
        deRegisterInterceptor();
        $state.transitionTo(toState.name, toParams);
    });

    $rootScope.$on("$stateChangeSuccess", function (e, toState, toParams) {
        UserService.ensureUserIsLoggedIn();
    });

    function getCurrentUser() {
        UserService.getCurrentUserInfo(function (user) {
            $rootScope.currentUser = user;
            $rootScope.$broadcast("root-user-object-changed");
        });
    }

    // Used to check if JSON objects are empty in templates for ng-if's and ng-show's
    $scope.isEmpty = function (objectToCheck) {
        return _.isEmpty(objectToCheck);
    };

    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    };
}
