"use strict";

ArgusApp.Faqs = angular
    .module("ArgusApp.Faqs", [])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state("root.standardWithSidebar.faqs", {
                url: "/faqs",
                views: {
                    "main-content": {
                        templateUrl: "/app/modules/faqs/faqs.html",
                        controller: "FaqsCtrl"
                    }
                }
            })
    }]);
