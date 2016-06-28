System.register(['angular2/core', '../expense.service'], function(exports_1, context_1) {
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
    var core_1, expense_service_1;
    var ExpenseListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (expense_service_1_1) {
                expense_service_1 = expense_service_1_1;
            }],
        execute: function() {
            ExpenseListComponent = (function () {
                function ExpenseListComponent(expenseService) {
                    this._expenseService = expenseService;
                }
                ExpenseListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.expenses = [];
                    this._subscriptions = [];
                    this._subscriptions.push(this._expenseService
                        .expenses
                        .subscribe(function (expenses) {
                        _this.expenses = expenses;
                    }));
                    this._subscriptions.push(this._expenseService
                        .expense
                        .subscribe(function (expense) {
                        if (expense) {
                            _this.expenses.push(expense);
                        }
                    }));
                    this._subscriptions.push(this._expenseService
                        .filter
                        .subscribe(function (filter) {
                        if (filter) {
                            _this._expenseService.getAll(filter);
                        }
                    }));
                };
                ExpenseListComponent.prototype.ngOnDestroy = function () {
                    this._subscriptions.forEach(function (subscription) {
                        subscription.unsubscribe();
                    });
                };
                ExpenseListComponent = __decorate([
                    core_1.Component({
                        selector: 'expense-list',
                        directives: [],
                        template: "\n      <div class=\"jumbotron center-block\">\n        <h2>List of all your expenses</h2>\n      </div>\n      <div>\n        <table>\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Category</th>\n              <th>Amount</th>\n              <th>Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"#expense of expenses\">\n              <td>{{ expense.name }}</td>\n              <td>{{ expense.category.name }}</td>\n              <td>{{ expense.value }}</td>\n              <td>{{ expense.createdAt | date }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [expense_service_1.ExpenseService])
                ], ExpenseListComponent);
                return ExpenseListComponent;
            }());
            exports_1("ExpenseListComponent", ExpenseListComponent);
        }
    }
});
//# sourceMappingURL=expense-list.component.js.map