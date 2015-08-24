using System.Web;
using System.Web.Optimization;

namespace LandlordsBible.WebUI
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725

        public static void RegisterBundles(BundleCollection bundles)
        {
            // NOTICE: also to keep in mind: http://stackoverflow.com/questions/14402741/jquery-1-9-0-and-modernizr-cannot-be-minified-with-the-asp-net-web-optimization
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/base-libs").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery.blockUI.js", // TODO: this once can most probably be removed in the future (check if used anywhere)
                        "~/Scripts/modernizr-2.8.3.js",
                        "~/Scripts/foundation.js",
                        "~/Scripts/lodash.js",
                        "~/Scripts/moment.js",
                        "~/Scripts/highcharts.js",
                        "~/Scripts/highcharts-more.js",
                        "~/Scripts/modules/solid-gauge.src.js",
                        "~/Scripts/vendor/foundation-datetimepicker.js",
                        "~/Scripts/vendor/jquery.noty.packaged.js"));

            bundles.Add(new ScriptBundle("~/bundles/argus-app").Include(
                        // Angular dependencies
                        "~/Scripts/angular/angular.js",
                        "~/Scripts/angular/angular-cookies.js",
                        "~/Scripts/angular/angular-ui-router.js",
                        "~/Scripts/angular/angular-tree-control.js",
                        "~/Scripts/angular/angular-local-storage.js",
                        "~/Scripts/angular/loading-bar.js",
                        "~/Scripts/angular/smart-table.js",

                        // Angular base
                        "~/app/app.js",
                        "~/app/modules/common/module.js",
                        "~/app/modules/home/module.js",
                        "~/app/modules/error/module.js",
                        "~/app/modules/user/module.js",
                        "~/app/modules/articles/module.js",
                        "~/app/modules/faqs/module.js",
                        "~/app/modules/contact-us/module.js",
                        "~/app/modules/customer-testimonials/module.js",

                        // Angular common
                        "~/app/modules/common/services/http-request-interceptor.js",
                        "~/app/modules/common/services/notification-service.js",
                        "~/app/modules/common/services/page-title-service.js",
                        "~/app/modules/common/directives/ng-confirm-directive.js",
                        "~/app/modules/common/directives/ng-focus-on-directive.js",
                        "~/app/modules/common/directives/form-elements/ng-input-directives.js",
                        "~/app/modules/common/directives/validation-summary/validation-summary-directive.js",
                        "~/app/modules/common/directives/form-elements/model-state-service.js",
                        "~/app/modules/common/directives/page-header/page-header-directive.js",
                        "~/app/modules/root-controller.js",
                        "~/app/modules/header-controller.js",
                        "~/app/modules/home/home-controller.js",

                        // Angular error
                        "~/app/modules/error/error-service.js",
                        "~/app/modules/error/error-controller.js",

                        // Anuglar user
                        "~/app/modules/user/user-service.js",
                        "~/app/modules/user/login/login-controller.js",
                        "~/app/modules/user/user-list/user-list-controller.js",
                        "~/app/modules/user/create-user/create-user-controller.js",
                        "~/app/modules/user/manage-account/manage-account-controller.js",
                        
                        // Angular articles
                        "~/app/modules/articles/news/news-controller.js",
                        "~/app/modules/articles/studies/studies-controller.js",

                        // Angular faqs 
                        "~/app/modules/faqs/faqs-controller.js",
                        "~/app/modules/faqs/faqs-service.js",

                        // Angular customer-testimonials
                        "~/app/modules/customer-testimonials/customer-testimonials-controller.js",
                        
                        // Angular contact-us
                        "~/app/modules/contact-us/contact-us-controller.js",
                        "~/app/modules/contact-us/contact-us-service.js"));

            bundles.Add(new StyleBundle("~/resources/css").Include(
                        "~/resources/app.css",
                        "~/resources/vendor/angular-tree/tree-control-attribute.css",
                        "~/resources/vendor/foundation-datepicker.css",
                        "~/resources/vendor/loading-bar.css"));

            //BundleTable.EnableOptimizations = true; // Uncomment to force minification in debug mode
        }
    }
}