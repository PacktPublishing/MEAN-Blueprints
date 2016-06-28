System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Job;
    return {
        setters:[],
        execute: function() {
            Job = (function () {
                function Job(_id, title, slug, summary, description, type, company, industry, country, createdAt) {
                    this._id = _id;
                    this.title = title;
                    this.slug = slug;
                    this.summary = summary;
                    this.description = description;
                    this.type = type;
                    this.company = company;
                    this.industry = industry;
                    this.country = country;
                    this.createdAt = createdAt;
                }
                return Job;
            }());
            exports_1("Job", Job);
        }
    }
});
//# sourceMappingURL=job.model.js.map