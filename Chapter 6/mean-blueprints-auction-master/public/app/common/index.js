System.register(['./headers', './socket.service', './money.model'], function(exports_1, context_1) {
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
            function (socket_service_1_1) {
                exportStar_1(socket_service_1_1);
                exportStar_1(socket_service_1_1);
            },
            function (money_model_1_1) {
                exportStar_1(money_model_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map