System.register(['./components/bid.component', './components/bid-list.component', './components/bid-form.component', './bid.model', './bid.service'], function(exports_1, context_1) {
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
            function (bid_component_1_1) {
                exportStar_1(bid_component_1_1);
            },
            function (bid_list_component_1_1) {
                exportStar_1(bid_list_component_1_1);
            },
            function (bid_form_component_1_1) {
                exportStar_1(bid_form_component_1_1);
            },
            function (bid_model_1_1) {
                exportStar_1(bid_model_1_1);
            },
            function (bid_service_1_1) {
                exportStar_1(bid_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map