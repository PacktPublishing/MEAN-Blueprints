System.register(['./components/category-create.component', './components/category-list.component', './components/category.component', './components/categories.component', './category.service', './category.model'], function(exports_1, context_1) {
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
            function (category_create_component_1_1) {
                exportStar_1(category_create_component_1_1);
            },
            function (category_list_component_1_1) {
                exportStar_1(category_list_component_1_1);
            },
            function (category_component_1_1) {
                exportStar_1(category_component_1_1);
            },
            function (categories_component_1_1) {
                exportStar_1(categories_component_1_1);
            },
            function (category_service_1_1) {
                exportStar_1(category_service_1_1);
            },
            function (category_model_1_1) {
                exportStar_1(category_model_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map