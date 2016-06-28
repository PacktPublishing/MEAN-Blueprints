System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Company;
    return {
        setters:[],
        execute: function() {
            Company = (function () {
                function Company(_id, name, slug, owner, members, summary, country, address, createdAt) {
                    this._id = _id;
                    this.name = name;
                    this.slug = slug;
                    this.owner = owner;
                    this.members = members;
                    this.summary = summary;
                    this.country = country;
                    this.address = address;
                    this.createdAt = createdAt;
                }
                return Company;
            }());
            exports_1("Company", Company);
        }
    }
});
//# sourceMappingURL=company.model.js.map