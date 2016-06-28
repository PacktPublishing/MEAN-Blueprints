System.register(['angular2/core', 'angular2/router', './auth/index', './product/index'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, index_1, index_2;
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
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(authHttp, authSerice, router) {
                    this._router = router;
                    this._authSerivce = authSerice;
                    this._authHttp = authHttp;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this.currentUser = {};
                    this._authHttp.unauthorized.subscribe(function (res) {
                        if (res) {
                            _this._router.navigate(['./Signin']);
                        }
                    });
                    this._authSerivce.currentUser.subscribe(function (user) {
                        _this._router.navigate(['./Products']);
                        _this.currentUser = user;
                    });
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/products/...', as: 'Products', component: index_2.ProductComponent, useAsDefault: true },
                        { path: '/signin', as: 'Signin', component: index_1.SigninComponent }
                    ]),
                    core_1.Component({
                        selector: 'admin-app',
                        directives: [
                            router_1.RouterOutlet
                        ],
                        template: "\n      <div class=\"app-wrapper card whiteframe-z2\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <a href=\"#\">ecommerce - admin</a>\n            <span class=\"pull-right\">{{currentUser.email}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [index_1.AuthHttp, index_1.AuthService, router_2.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map