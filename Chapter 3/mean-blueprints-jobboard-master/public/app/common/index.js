System.register(['./headers', './query'], function(exports_1, context_1) {
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
            function (headers_1_1) {
                exportStar_1(headers_1_1);
            },
            function (query_1_1) {
                exportStar_1(query_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map