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
    var JobCreateComponent;
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
            JobCreateComponent = (function () {
                function JobCreateComponent(jobService, router) {
                    this._router = router;
                    this._jobService = jobService;
                }
                JobCreateComponent.prototype.ngOnInit = function () {
                    this.job = new job_model_1.Job();
                };
                JobCreateComponent.prototype.onSubmit = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this._jobService
                        .create(this.job)
                        .subscribe(function (job) {
                        if (job) {
                            _this.goToJob(job._id, job.slug);
                        }
                    });
                };
                JobCreateComponent.prototype.goToJob = function (id, slug) {
                    this._router.navigate(['JobDetail', { id: id, slug: slug }]);
                };
                JobCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'job-create',
                        directives: [
                            router_1.RouterLink
                        ],
                        template: "\n      <div class=\"jumbotron center-block\">\n        <h1>Post a new job</h1>\n        <p>We are happy to see that you are growing.</p>\n      </div>\n      <div>\n        <form role=\"form\" (submit)=\"onSubmit($event)\">\n          <div class=\"form-group\">\n            <label for=\"title\">Job title</label>\n            <input type=\"text\" [(ngModel)]=\"job.title\" class=\"form-control\" id=\"title\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"industry\">Industry</label>\n            <input type=\"text\" [(ngModel)]=\"job.industry\" class=\"form-control\" id=\"industry\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" [(ngModel)]=\"job.country\" class=\"form-control\" id=\"country\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"type\">Job type</label>\n            <input type=\"text\" [(ngModel)]=\"job.type\" class=\"form-control\" id=\"type\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"summary\">Summary</label>\n            <textarea [(ngModel)]=\"job.summary\" class=\"form-control\" id=\"summary\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea [(ngModel)]=\"job.description\" class=\"form-control\" id=\"description\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button\">Create a job</button>\n        </form>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [job_service_1.JobService, router_1.Router])
                ], JobCreateComponent);
                return JobCreateComponent;
            }());
            exports_1("JobCreateComponent", JobCreateComponent);
        }
    }
});
//# sourceMappingURL=job-create.component.js.map