System.register(['angular2/core', 'angular2/router', '../../category/index', '../expense.service', '../expense.model'], function(exports_1, context_1) {
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
    var core_1, router_1, index_1, expense_service_1, expense_model_1;
    var ExpenseCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (expense_service_1_1) {
                expense_service_1 = expense_service_1_1;
            },
            function (expense_model_1_1) {
                expense_model_1 = expense_model_1_1;
            }],
        execute: function() {
            ExpenseCreateComponent = (function () {
                function ExpenseCreateComponent(expenseService, categoryService) {
                    this._expenseService = expenseService;
                    this._categoryService = categoryService;
                }
                ExpenseCreateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.expense = new expense_model_1.Expense();
                    this.categories = [];
                    this._subscriptions = [];
                    this._subscriptions.push(this._categoryService
                        .categories
                        .subscribe(function (categories) {
                        _this.categories = categories;
                    }));
                };
                ExpenseCreateComponent.prototype.ngOnDestroy = function () {
                    this._subscriptions.forEach(function (subscription) {
                        subscription.unsubscribe();
                    });
                };
                ExpenseCreateComponent.prototype.onSubmit = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this._expenseService
                        .create(this.expense)
                        .subscribe(function (expense) {
                        _this._expenseService.expense.next(expense);
                    }, function (err) { return console.error(err); });
                };
                ExpenseCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'expense-create',
                        directives: [
                            router_1.RouterLink
                        ],
                        template: "\n      <div>\n        <form role=\"form\" (submit)=\"onSubmit($event)\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" [(ngModel)]=\"expense.name\" class=\"form-control\" id=\"name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"category\">Category</label>\n            <select name=\"category\" [(ngModel)]=\"expense.category\">\n              <option *ngFor=\"#category of categories\" [value]=\"category._id\">\n                {{ category.name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"value\">Amount</label>\n            <input type=\"text\" [(ngModel)]=\"expense.value\" class=\"form-control\" id=\"value\">\n          </div>\n          <button type=\"submit\" class=\"button\">Add</button>\n        </form>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [expense_service_1.ExpenseService, index_1.CategoryService])
                ], ExpenseCreateComponent);
                return ExpenseCreateComponent;
            }());
            exports_1("ExpenseCreateComponent", ExpenseCreateComponent);
        }
    }
});
//# sourceMappingURL=expense-create.component.js.map