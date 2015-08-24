"use strict";

ArgusApp.Faqs
    .service("FaqsService", ArgusFaqsService);

ArgusFaqsService.$inject = ["$http"];
function ArgusFaqsService($http) {
    var self = this;

    this.getFaqs = function () {
        return $http.get("/api/faqs");
    };
}
