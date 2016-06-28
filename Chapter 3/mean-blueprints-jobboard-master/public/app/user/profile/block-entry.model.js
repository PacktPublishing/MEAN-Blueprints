System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BlockEntry;
    return {
        setters:[],
        execute: function() {
            BlockEntry = (function () {
                function BlockEntry(title, subTitle, description) {
                    this.title = title;
                    this.subTitle = subTitle;
                    this.description = description;
                }
                return BlockEntry;
            }());
            exports_1("BlockEntry", BlockEntry);
        }
    }
});
//# sourceMappingURL=block-entry.model.js.map