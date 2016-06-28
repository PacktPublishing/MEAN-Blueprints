System.register(['angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var HEADERS, contentHeaders;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HEADERS = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
            exports_1("contentHeaders", contentHeaders = new http_1.Headers(HEADERS));
        }
    }
});
// contentHeaders.append('Content-Type', 'application/json');
// contentHeaders.append('Accept', 'application/json');
//# sourceMappingURL=headers.js.map