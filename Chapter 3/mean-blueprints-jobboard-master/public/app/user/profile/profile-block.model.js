System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Block;
    return {
        setters:[],
        execute: function() {
            Block = (function () {
                function Block(_id, title, subTitle, description) {
                    this._id = _id;
                    this.title = title;
                    this.subTitle = subTitle;
                    this.description = description;
                }
                return Block;
            }());
            exports_1("Block", Block);
        }
    }
});
//# sourceMappingURL=profile-block.model.js.map