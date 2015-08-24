"use strict";

ArgusApp.Common
    .controller("HeaderCtrl", ArgusHeaderCtrl);

ArgusHeaderCtrl.$inject = ["$scope", "$rootScope", "$state", "$timeout", "UserService", "PageTitleService", "GroupsTreeService"];
function ArgusHeaderCtrl($scope, $rootScope, $state, $timeout, UserService, PageTitleService, GroupsTreeService) {
    $scope.selected = GroupsTreeService.selected;
    $scope.isUserLoaded = false;
    $scope.sensorRoutes = [];
    $scope.manageRoutes = [];
    $scope.currentPage = PageTitleService.page;

    $scope.userName = [];

    function checkUser() {
        if (!_.isEmpty($rootScope.currentUser)) {
            $scope.userName = UserService.currentUser.email;
        } else {
            $scope.userName = "";
        }
    }

    (function () {
        initializeRoutes();
    })();

    $rootScope.$on("root-user-object-changed", function (event, error) {
        initializeRoutes();
    });

    function initializeRoutes() {
        $scope.isUserLoaded = !_.isEmpty($rootScope.currentUser);
        clearRoutes();

        if ($scope.isUserLoaded) {
            initializeSensorRoutes();
            initializeManageRoutes();
        }

        reinitializeNavigationFoundation();
    }

    function clearRoutes() {
        $scope.sensorRoutes = [];
        $scope.manageRoutes = [];
    }

    function initializeManageRoutes() {
        if ($rootScope.currentUser.isMetadataManager)
            $scope.manageRoutes.push({ uri: $state.href("root.standardWithSidebar.metadata"), name: "Metadata", cssClass: "fa-pencil-square-o" });
        if ($rootScope.currentUser.isUserManager)
            $scope.manageRoutes.push({ uri: $state.href("root.standardWithSidebar.users"), name: "Users", cssClass: "fa-users" });
    }

    function reinitializeNavigationFoundation() {
        // This needs to be done because otherwise foundation is unaware of these new dynamic elements and then dropdowns for example don't work
        $timeout(function () {
            $(".main-navigation").foundation();
        });
    }

    $scope.manageOwnAccountUri = function () {
        return $state.href("root.standardWithSidebar.users.manage", { id: UserService.currentUser.id });
    };

    $scope.logout = function () {
        UserService.logout();
    };
}
