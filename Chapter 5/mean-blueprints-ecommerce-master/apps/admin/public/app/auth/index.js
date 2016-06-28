System.register(['./components/register.component', './components/signin.component', './services/auth.service', './services/auth-http'], function(exports_1, context_1) {
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
            function (register_component_1_1) {
                exportStar_1(register_component_1_1);
            },
            function (signin_component_1_1) {
                exportStar_1(signin_component_1_1);
            },
            function (auth_service_1_1) {
                exportStar_1(auth_service_1_1);
            },
            function (auth_http_1_1) {
                exportStar_1(auth_http_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map