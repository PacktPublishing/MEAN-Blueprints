System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function serializeQuery(query) {
        var chunks = [];
        for (var key in query)
            if (query.hasOwnProperty(key)) {
                var k = encodeURIComponent(key);
                var v = encodeURIComponent(query[key]);
                chunks.push(k + "=" + v);
            }
        return chunks.join('&');
    }
    exports_1("serializeQuery", serializeQuery);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=query.js.map