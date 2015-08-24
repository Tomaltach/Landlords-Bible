"use strict";

// Currently used: https://code.angularjs.org/1.4.0-rc.1/
var ArgusApp = angular.module("ArgusApp", [
    "ngCookies",
    "ui.router",
    "angular-loading-bar",
    "LocalStorageModule",
    "smart-table",
    "ArgusApp.Common",
    "ArgusApp.Home",
    "ArgusApp.Error",
    "ArgusApp.User",
    "ArgusApp.Groups",
    "ArgusApp.Articles",
    "ArgusApp.Faqs",
    "ArgusApp.ContactUs",
])
.config(ArgusAppConfig)
.run(ArgusAppRun);

ArgusAppConfig.$inject = ["$httpProvider", "$stateProvider", "$urlRouterProvider", "cfpLoadingBarProvider", "localStorageServiceProvider"];
function ArgusAppConfig($httpProvider, $stateProvider, $urlRouterProvider, cfpLoadingBarProvider, localStorageServiceProvider) {
    cfpLoadingBarProvider.includeSpinner = false;

    $httpProvider.interceptors.push("httpRequestInterceptor");

    // Other routes are defined within module directories (inside each module.js file)
    // NOTE: for optional params, see: http://stackoverflow.com/a/30230421/413785
    $stateProvider
        .state("root", {
            abstract: true,
            views: {
                "header": {
                    templateUrl: "/app/modules/header.html", // default, can be overriden
                    controller: "HeaderCtrl"
                },
                "sub-navigation": {
                    template: "aasdf"
                },
                "layout": {},
                "footer": {
                    templateUrl: "/app/modules/footer.html" // default, can be overriden
                }
            }
        })
        .state("root.standard", {
            abstract: true,
            views: {
                "layout@": {
                    templateUrl: "/app/modules/common/layouts/standard.html"
                }
            }
        })
        .state("root.standardWithSidebar", {
            abstract: true,
            views: {
                "layout@": {
                    templateUrl: "/app/modules/common/layouts/standard-with-sidebar.html"
                }
            }
        });

    $urlRouterProvider.otherwise("/home");

    localStorageServiceProvider.setPrefix("ArgusApp");
}

ArgusAppRun.$inject = ["$rootScope"];
function ArgusAppRun($rootScope) {
    $rootScope.$on("$viewContentLoaded", function () {
        $(document).foundation();
    });
}


// TODO: fix the namespace par
// SEE: https://github.com/zurb/foundation/issues/5661#issuecomment-57068242
Foundation.global.namespace = "";

// Weird foundation fix 
// SEE: http://stackoverflow.com/a/27788062/413785
Object.getPrototypeOf(document.createComment('')).getAttribute = function () { }