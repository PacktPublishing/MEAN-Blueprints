System.register(['./job.service', './job.model', './components/job-base.component', './components/jobs.component', './components/job-create.component', './components/job-detail.component', './components/job-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (job_service_1_1) {
                exportStar_1(job_service_1_1);
            },
            function (job_model_1_1) {
                exportStar_1(job_model_1_1);
            },
            function (job_base_component_1_1) {
                exportStar_1(job_base_component_1_1);
            },
            function (jobs_component_1_1) {
                exportStar_1(jobs_component_1_1);
            },
            function (job_create_component_1_1) {
                exportStar_1(job_create_component_1_1);
            },
            function (job_detail_component_1_1) {
                exportStar_1(job_detail_component_1_1);
            },
            function (job_list_component_1_1) {
                exportStar_1(job_list_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map