System.register(['angular2/core', 'angular2/router', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var SigninComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(authService, router) {
                    this._authService = authService;
                    this._router = router;
                }
                SigninComponent.prototype.signin = function (event, email, password) {
                    var _this = this;
                    event.preventDefault();
                    var data = { email: email, password: password };
                    this._authService
                        .signin(data)
                        .subscribe(function (user) {
                        _this._authService.setCurrentUser(user);
                        _this._router.navigateByUrl('/');
                    });
                };
                SigninComponent = __decorate([
                    core_1.Component({
                        selector: 'signin',
                        directives: [
                            router_1.RouterLink
                        ],
                        template: "\n      <div class=\"login jumbotron center-block\">\n        <h1>Login</h1>\n        <form role=\"form\" (submit)=\"signin($event, email.value, password.value)\">\n          <div class=\"form-group\">\n            <label for=\"email\">E-mail</label>\n            <input type=\"text\" #email class=\"form-control\" id=\"email\" placeholder=\"enter your e-mail\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"now your password\">\n          </div>\n          <button type=\"submit\" class=\"button\">Submit</button>\n        </form>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_1("SigninComponent", SigninComponent);
        }
    }
});
//# sourceMappingURL=signin.component.js.map