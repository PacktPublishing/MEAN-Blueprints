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
    var JobService;
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
            JobService = (function () {
                function JobService(http, authHttp) {
                    this._http = http;
                    this._authHttp = authHttp;
                }
                JobService.prototype.getAll = function (criteria) {
                    var query = '';
                    var str = index_2.serializeQuery(criteria);
                    if (str) {
                        query = "?" + str;
                    }
                    return this._http
                        .get("/api/jobs" + query, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                JobService.prototype.findById = function (id) {
                    return this._http
                        .get("/api/jobs/" + id, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                JobService.prototype.create = function (job) {
                    var body = JSON.stringify(job);
                    return this._authHttp
                        .post('/api/jobs', body, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                JobService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, index_1.AuthHttp])
                ], JobService);
                return JobService;
            }());
            exports_1("JobService", JobService);
        }
    }
});
//# sourceMappingURL=job.service.js.map