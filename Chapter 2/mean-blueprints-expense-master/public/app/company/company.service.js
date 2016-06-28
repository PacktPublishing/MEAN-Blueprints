System.register(['angular2/core', 'angular2/http', '../auth/index', '../common/index'], function(exports_1, context_1) {
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
    var core_1, http_1, index_1, index_2;
    var CompanyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            CompanyService = (function () {
                function CompanyService(http, authHttp) {
                    this._http = http;
                    this._authHttp = authHttp;
                }
                CompanyService.prototype.getAll = function () {
                    return this._http
                        .get('/api/companies', { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                CompanyService.prototype.findById = function (id) {
                    return this._http
                        .get("/api/companies/" + id, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                CompanyService.prototype.create = function (company) {
                    var body = JSON.stringify(company);
                    return this._authHttp
                        .post('/api/companies', body, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                CompanyService.prototype.update = function (company) {
                    var body = JSON.stringify(company);
                    return this._authHttp
                        .put("/api/companies/" + company._id, body, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                CompanyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, index_1.AuthHttp])
                ], CompanyService);
                return CompanyService;
            }());
            exports_1("CompanyService", CompanyService);
        }
    }
});
//# sourceMappingURL=company.service.js.map