System.register(['angular2/core', 'angular2/router', '../job.service', '../job.model'], function(exports_1, context_1) {
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
    var core_1, router_1, job_service_1, job_model_1;
    var JobDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (job_model_1_1) {
                job_model_1 = job_model_1_1;
            }],
        execute: function() {
            JobDetailComponent = (function () {
                function JobDetailComponent(jobService, routerParams) {
                    this._routeParams = routerParams;
                    this._jobService = jobService;
                }
                JobDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.job = new job_model_1.Job();
                    this._jobService
                        .findById(id)
                        .subscribe(function (job) {
                        _this.job = job;
                    });
                };
                JobDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'job-detail',
                        directives: [
                            router_1.RouterLink
                        ],
                        template: "\n      <div class=\"job-header\">\n        <div class=\"col content\">\n          <p>Added on: {{ job.createdAt }}</p>\n          <h2>{{ job.name }}</h2>\n          <div class=\"job-description\">\n            <h4>Description</h4>\n            <div>{{ job.description }}</div>\n          </div>\n        </div>\n        <div class=\"sidebar\">\n          <h4>Country</h4>\n          <p>{{ job.country }}</p>\n          <h4>Industry</h4>\n          <p>{{ job.industry }}</p>\n          <h4>Job type</h4>\n          <p>{{ job.type }}</p>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [job_service_1.JobService, router_1.RouteParams])
                ], JobDetailComponent);
                return JobDetailComponent;
            }());
            exports_1("JobDetailComponent", JobDetailComponent);
        }
    }
});
//# sourceMappingURL=job-detail.component.js.map