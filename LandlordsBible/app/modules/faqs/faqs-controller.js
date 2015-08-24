"use strict";

ArgusApp.Faqs
    .controller("FaqsCtrl", ArgusFaqsCtrl);

ArgusFaqsCtrl.$inject = ["$scope", "PageTitleService", "FaqsService"];
function ArgusFaqsCtrl($scope, PageTitleService, FaqsService) {
    $scope.faqs = [];

    $scope.accordion = {
        current: null
    };

    (function () {
        PageTitleService.setHeaderTitle("FAQ", "FAQs");
        initializeFaqs();
    })();

    function initializeFaqs() {
        FaqsService.getFaqs().success(function (data) {
            $scope.faqs = data;
            $scope.accordion.current = $scope.faqs[0].title;
        });
    }

    $scope.onFaqTitleClick = function (title, icon) {
        $scope.accordion.current = $scope.accordion.current === title ? null : title;
    };

    $scope.getIconClass = function (faq) {
        return $scope.accordion.current == faq.title ? "fa-minus" : "fa-plus";
    };
}
