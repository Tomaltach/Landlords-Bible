"use strict";

ArgusApp.Home.controller("HomeCtrl", ArgusHomeCtrl);

ArgusHomeCtrl.$inject = ["$scope", "$state", "UserService", "PageTitleService"];
function ArgusHomeCtrl($scope, $state, UserService, PageTitleService) {
    $scope.tiles = [];

    (function () {
        initializeRoutes();
        PageTitleService.setHeaderTitle("Welcome!", null, "Home");
    })();

    function initializeRoutes() {
        $scope.tiles.push({ url: "#", cssClass: "fa-question-circle", name: "Frequently Asked Questions" });
        $scope.tiles.push({ url: "#", cssClass: "fa-envelope", name: "Contact Us" });
    }
}
