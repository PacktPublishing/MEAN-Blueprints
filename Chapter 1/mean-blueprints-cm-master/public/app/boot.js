System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', 'angular2/router', './auth/auth-http', './auth/auth.service', './contact/contact.service', './app.component', 'rxjs/add/operator/map', 'rxjs/add/operator/share', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, http_1, router_1, auth_http_1, auth_service_1, contact_service_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_http_1_1) {
                auth_http_1 = auth_http_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                auth_service_1.AuthService,
                auth_http_1.AuthHttp,
                contact_service_1.ContactService,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map