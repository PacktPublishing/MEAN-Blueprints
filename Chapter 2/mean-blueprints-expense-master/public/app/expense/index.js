System.register(['./components/expense-create.component', './components/expense-list.component', './components/expenses.component', './expense.service', './expense.model'], function(exports_1, context_1) {
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
            function (expense_create_component_1_1) {
                exportStar_1(expense_create_component_1_1);
            },
            function (expense_list_component_1_1) {
                exportStar_1(expense_list_component_1_1);
            },
            function (expenses_component_1_1) {
                exportStar_1(expenses_component_1_1);
            },
            function (expense_service_1_1) {
                exportStar_1(expense_service_1_1);
            },
            function (expense_model_1_1) {
                exportStar_1(expense_model_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map