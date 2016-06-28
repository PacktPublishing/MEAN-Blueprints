System.register(['angular2/core', '../expense.service', '../../category/index', './expense-create.component', './expense-list.component', './expense-balance.component', './expense-filter.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, expense_service_1, index_1, expense_create_component_1, expense_list_component_1, expense_balance_component_1, expense_filter_component_1;
    var ExpensesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (expense_service_1_1) {
                expense_service_1 = expense_service_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (expense_create_component_1_1) {
                expense_create_component_1 = expense_create_component_1_1;
            },
            function (expense_list_component_1_1) {
                expense_list_component_1 = expense_list_component_1_1;
            },
            function (expense_balance_component_1_1) {
                expense_balance_component_1 = expense_balance_component_1_1;
            },
            function (expense_filter_component_1_1) {
                expense_filter_component_1 = expense_filter_component_1_1;
            }],
        execute: function() {
            ExpensesComponent = (function () {
                function ExpensesComponent(expenseService, categoryService) {
                    this._expenseService = expenseService;
                    this._categoryService = categoryService;
                }
                ExpensesComponent.prototype.ngOnInit = function () {
                    this._categoryService.getAll().subscribe();
                    this._expenseService.filter.next({});
                };
                ExpensesComponent = __decorate([
                    core_1.Component({
                        selector: 'expenses',
                        directives: [
                            expense_create_component_1.ExpenseCreateComponent,
                            expense_list_component_1.ExpenseListComponent,
                            expense_balance_component_1.ExpenseBalanceComponent,
                            expense_filter_component_1.ExpenseFilterComponent
                        ],
                        template: "\n      <expense-balance></expense-balance>\n      <expense-filter></expense-filter>\n      <expense-create></expense-create>\n      <expense-list></expense-list>\n    "
                    }), 
                    __metadata('design:paramtypes', [expense_service_1.ExpenseService, index_1.CategoryService])
                ], ExpensesComponent);
                return ExpensesComponent;
            }());
            exports_1("ExpensesComponent", ExpensesComponent);
        }
    }
});
//# sourceMappingURL=expenses.component.js.map