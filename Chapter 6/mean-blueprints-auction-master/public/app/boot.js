System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', 'angular2/router', './app.component', './auth/index', './auction/index', './bid/index', './common/index', 'rxjs/add/operator/map', 'rxjs/add/operator/merge', 'rxjs/add/operator/share', 'rxjs/add/operator/combineLatest', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/debounceTime'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, http_1, router_1, app_component_1, index_1, index_2, index_3, index_4;
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
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                index_1.AuthHttp,
                index_1.AuthService,
                index_4.SocketService,
                index_2.AuctionService,
                // BidderService,
                index_3.BidService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map