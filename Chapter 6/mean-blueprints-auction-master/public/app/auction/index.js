System.register(['./components/auction-base.component', './components/auction-list.component', './components/auction-detail.component', './auction.model', './auction.service'], function(exports_1, context_1) {
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
            function (auction_base_component_1_1) {
                exportStar_1(auction_base_component_1_1);
            },
            function (auction_list_component_1_1) {
                exportStar_1(auction_list_component_1_1);
            },
            function (auction_detail_component_1_1) {
                exportStar_1(auction_detail_component_1_1);
            },
            function (auction_model_1_1) {
                exportStar_1(auction_model_1_1);
            },
            function (auction_service_1_1) {
                exportStar_1(auction_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map