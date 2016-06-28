System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Subject/BehaviorSubject'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, BehaviorSubject_1;
    var AuthHttp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            }],
        execute: function() {
            AuthHttp = (function () {
                function AuthHttp(http) {
                    this._http = http;
                    this.unauthorized = new BehaviorSubject_1.BehaviorSubject(null);
                }
                AuthHttp.prototype.request = function (requestArgs, additionalArgs) {
                    var _this = this;
                    var opts = new http_1.RequestOptions(requestArgs);
                    if (additionalArgs) {
                        opts = opts.merge(additionalArgs);
                    }
                    var req = new http_1.Request(opts);
                    if (!req.headers) {
                        req.headers = new http_1.Headers();
                    }
                    if (!req.headers.has('Authorization')) {
                        req.headers.append('Authorization', "Bearer " + this.getToken());
                    }
                    return this._http.request(req).catch(function (err) {
                        if (err.status === 401) {
                            _this.unauthorized.next(err);
                        }
                        return Observable_1.Observable.throw(err);
                    });
                };
                AuthHttp.prototype.getToken = function () {
                    return localStorage.getItem('token');
                };
                AuthHttp.prototype.get = function (url, opts) {
                    return this.request({ url: url, method: http_1.RequestMethod.Get }, opts);
                };
                AuthHttp.prototype.post = function (url, body, opts) {
                    return this.request({ url: url, method: http_1.RequestMethod.Post, body: body }, opts);
                };
                AuthHttp.prototype.put = function (url, body, opts) {
                    return this.request({ url: url, method: http_1.RequestMethod.Put, body: body }, opts);
                };
                AuthHttp.prototype.delete = function (url, body, opts) {
                    return this.request({ url: url, method: http_1.RequestMethod.Delete, body: body }, opts);
                };
                AuthHttp = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthHttp);
                return AuthHttp;
            }());
            exports_1("AuthHttp", AuthHttp);
        }
    }
});
//# sourceMappingURL=auth-http.js.map