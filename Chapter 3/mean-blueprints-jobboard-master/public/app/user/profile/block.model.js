System.register(['./entry.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var entry_model_1;
    var Block;
    return {
        setters:[
            function (entry_model_1_1) {
                entry_model_1 = entry_model_1_1;
            }],
        execute: function() {
            Block = (function () {
                function Block(_id, title, slug, data) {
                    this._id = _id;
                    this.title = title;
                    this.slug = slug;
                    this.data = data || [new entry_model_1.Entry()];
                }
                return Block;
            }());
            exports_1("Block", Block);
        }
    }
});
//# sourceMappingURL=block.model.js.map