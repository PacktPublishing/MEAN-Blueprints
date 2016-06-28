System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Category;
    return {
        setters:[],
        execute: function() {
            Category = (function () {
                function Category(_id, name, description, owner, collaborators, createdAt) {
                    this._id = _id;
                    this.name = name;
                    this.description = description;
                    this.owner = owner;
                    this.collaborators = collaborators;
                    this.createdAt = new Date(createdAt);
                }
                return Category;
            }());
            exports_1("Category", Category);
        }
    }
});
//# sourceMappingURL=category.model.js.map