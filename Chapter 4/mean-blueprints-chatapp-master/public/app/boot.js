System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', 'angular2/router', './app.component', './services/chat.service', './services/thread.service', './services/message.service', './services/user.service', 'rxjs/add/operator/map', 'rxjs/add/operator/share', 'rxjs/add/operator/combineLatest', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/debounceTime'], function(exports_1) {
    "use strict";
    var browser_1, core_1, http_1, router_1, app_component_1, chat_service_1, thread_service_1, message_service_1, user_service_1;
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
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS,
                chat_service_1.ChatService,
                thread_service_1.ThreadService,
                message_service_1.MessageService,
                user_service_1.UserService,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map