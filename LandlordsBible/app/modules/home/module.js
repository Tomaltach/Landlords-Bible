"use strict";

ArgusApp.Home = angular
    .module("ArgusApp.Home", [])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state("root.standard.home", {
                url: "/home",
                views: {
                    "main-content": {
                        templateUrl: "/app/modules/home/home.html",
                        controller: "HomeCtrl"
                    }
                }
            });
    }]);