System.register(['angular2/core', 'angular2/router', '../job.service'], function(exports_1, context_1) {
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
    var core_1, router_1, job_service_1;
    var JobsComponent;
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
            }],
        execute: function() {
            JobsComponent = (function () {
                function JobsComponent(jobsService, router) {
                    this._router = router;
                    this._jobsService = jobsService;
                }
                JobsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var query = {};
                    if (this.company) {
                        query.company = this.company;
                    }
                    this._jobsService
                        .getAll(query)
                        .subscribe(function (jobs) {
                        _this.jobs = jobs;
                    });
                };
                JobsComponent = __decorate([
                    core_1.Component({
                        selector: 'jobs',
                        inputs: ['company'],
                        directives: [router_1.RouterLink],
                        template: "\n      <div *ngFor=\"#job of jobs\" class=\"col\">\n        <h3>\n          <a href=\"#\"\n            [routerLink]=\"['/Jobs', 'JobDetail', { id: job._id, slug: job.slug }]\">\n            {{ job.title }}\n          </a>\n        </h3>\n        <p>\n          <a href=\"#\"\n            [routerLink]=\"['/Companies', 'CompanyDetail', { id: job.company._id, slug: job.company.slug }]\">\n            {{ job.company.name }}\n          </a>\n          <span>\u00B7</span>\n          <span>{{ job.industry }}</span>\n          <span>\u00B7</span>\n          <span>{{ job.type }}</span>\n          <span>\u00B7</span>\n          <span>{{ job.createdAt }}</span>\n        </p>\n        <p>{{ job.summary }}</p>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [job_service_1.JobService, router_1.Router])
                ], JobsComponent);
                return JobsComponent;
            }());
            exports_1("JobsComponent", JobsComponent);
        }
    }
});
//# sourceMappingURL=jobs.component.js.map