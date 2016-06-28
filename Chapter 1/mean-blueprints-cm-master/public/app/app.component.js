System.register(['angular2/core', 'angular2/router', './auth/auth-http', './auth/signin', './auth/register', './contact/components/contact.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, auth_http_1, signin_1, register_1, contact_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (auth_http_1_1) {
                auth_http_1 = auth_http_1_1;
            },
            function (signin_1_1) {
                signin_1 = signin_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(authHttp, router) {
                    var _this = this;
                    this._authHttp = authHttp;
                    this._router = router;
                    this._authHttp.unauthorized.subscribe(function (res) {
                        if (res) {
                            _this._router.navigate(['./Signin']);
                        }
                    });
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/signin', as: 'Signin', component: signin_1.Signin },
                        { path: '/register', as: 'Register', component: register_1.Register },
                        { path: '/contacts/...', as: 'Contacts', component: contact_component_1.ContactComponent, useAsDefault: true }
                    ]),
                    core_1.Component({
                        selector: 'cm-app',
                        directives: [
                            signin_1.Signin,
                            register_1.Register,
                            contact_component_1.ContactComponent,
                            router_1.RouterOutlet
                        ],
                        template: "\n      <div class=\"app-wrapper col card whiteframe-z2\">\n        <div class=\"row\">\n          <h3>Contact manager</h3>\n        </div>\n        <router-outlet></router-outlet>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [auth_http_1.AuthHttp, router_2.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map