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
    var ExpenseBalanceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (expense_service_1_1) {
                expense_service_1 = expense_service_1_1;
            }],
        execute: function() {
            ExpenseBalanceComponent = (function () {
                function ExpenseBalanceComponent(expenseService) {
                    this._expenseService = expenseService;
                }
                ExpenseBalanceComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.info = {};
                    this._subscriptions = [];
                    this._subscriptions.push(this._expenseService
                        .filter
                        .subscribe(function (filter) {
                        if (filter) {
                            _this._getBalance(filter);
                        }
                    }));
                };
                ExpenseBalanceComponent.prototype.ngOnDestroy = function () {
                    this._subscriptions.forEach(function (subscription) {
                        subscription.unsubscribe();
                    });
                };
                ExpenseBalanceComponent.prototype._getBalance = function (filter) {
                    var _this = this;
                    this._expenseService
                        .getExpensesBalance(filter)
                        .subscribe(function (balance) {
                        _this.info = balance;
                    });
                };
                ExpenseBalanceComponent = __decorate([
                    core_1.Component({
                        selector: 'expense-balance',
                        directives: [],
                        template: "\n      <h2>\n        Total balance: {{ info.balance }}\n        <span>from {{ info.count }}</span>\n      </h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [expense_service_1.ExpenseService])
                ], ExpenseBalanceComponent);
                return ExpenseBalanceComponent;
            }());
            exports_1("ExpenseBalanceComponent", ExpenseBalanceComponent);
        }
    }
});
//# sourceMappingURL=expense-balance.component.js.map