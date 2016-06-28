System.register(['angular2/core', '../job.service', './jobs.component'], function(exports_1, context_1) {
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
    var core_1, job_service_1, jobs_component_1;
    var JobListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (job_service_1_1) {
                job_service_1 = job_service_1_1;
            },
            function (jobs_component_1_1) {
                jobs_component_1 = jobs_component_1_1;
            }],
        execute: function() {
            JobListComponent = (function () {
                function JobListComponent(jobsService) {
                    this._jobsService = jobsService;
                }
                JobListComponent = __decorate([
                    core_1.Component({
                        selector: 'job-list',
                        directives: [jobs_component_1.JobsComponent],
                        template: "\n      <div class=\"login jumbotron center-block\">\n        <h2>Job openings</h2>\n        <p class=\"lead\">Take a look, maybe you will find something for you.</p>\n      </div>\n      <div>\n        <jobs></jobs>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [job_service_1.JobService])
                ], JobListComponent);
                return JobListComponent;
            }());
            exports_1("JobListComponent", JobListComponent);
        }
    }
});
//# sourceMappingURL=job-list.component.js.map