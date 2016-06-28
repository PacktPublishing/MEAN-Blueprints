System.register(['./company.service', './company.model', './components/company-base.component', './components/company-create.component', './components/company-detail.component', './components/company-list.component'], function(exports_1, context_1) {
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
            function (company_service_1_1) {
                exportStar_1(company_service_1_1);
            },
            function (company_model_1_1) {
                exportStar_1(company_model_1_1);
            },
            function (company_base_component_1_1) {
                exportStar_1(company_base_component_1_1);
            },
            function (company_create_component_1_1) {
                exportStar_1(company_create_component_1_1);
            },
            function (company_detail_component_1_1) {
                exportStar_1(company_detail_component_1_1);
            },
            function (company_list_component_1_1) {
                exportStar_1(company_list_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map