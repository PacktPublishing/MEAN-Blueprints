System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Entry;
    return {
        setters:[],
        execute: function() {
            Entry = (function () {
                function Entry(title, subTitle, description) {
                    this.title = title || '';
                    this.subTitle = subTitle || '';
                    this.description = description || '';
                }
                return Entry;
            }());
            exports_1("Entry", Entry);
        }
    }
});
//# sourceMappingURL=entry.model.js.map