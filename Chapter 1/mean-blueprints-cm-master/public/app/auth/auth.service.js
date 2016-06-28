System.register(['angular2/core', 'angular2/http', '../common/headers'], function(exports_1, context_1) {
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
    var core_1, http_1, headers_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(http) {
                    this._http = http;
                }
                AuthService.prototype.signin = function (user) {
                    var body = this._serialize(user);
                    return this._http
                        .post('/auth/signin', body, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                AuthService.prototype.register = function (user) {
                    var body = this._serialize(user);
                    return this._http
                        .post('/auth/register', body, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                AuthService.prototype._serialize = function (data) {
                    return JSON.stringify(data);
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map