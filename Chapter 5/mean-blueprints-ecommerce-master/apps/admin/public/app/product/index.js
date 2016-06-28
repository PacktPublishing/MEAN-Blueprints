System.register(['./product.model', './product.service', './components/product.component', './components/product-list.component'], function(exports_1, context_1) {
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
            function (product_model_1_1) {
                exportStar_1(product_model_1_1);
            },
            function (product_service_1_1) {
                exportStar_1(product_service_1_1);
            },
            function (product_component_1_1) {
                exportStar_1(product_component_1_1);
            },
            function (product_list_component_1_1) {
                exportStar_1(product_list_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map