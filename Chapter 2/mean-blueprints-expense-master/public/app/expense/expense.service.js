System.register(['angular2/core', 'rxjs/Observable', 'rxjs/Subject/BehaviorSubject', '../auth/index', '../common/index', './expense.model'], function(exports_1, context_1) {
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
    var core_1, Observable_1, BehaviorSubject_1, index_1, index_2, expense_model_1;
    var ExpenseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (expense_model_1_1) {
                expense_model_1 = expense_model_1_1;
            }],
        execute: function() {
            ExpenseService = (function () {
                function ExpenseService(authHttp) {
                    var _this = this;
                    this._authHttp = authHttp;
                    this.expenses = new Observable_1.Observable(function (observer) {
                        _this._expensesObserver = observer;
                    });
                    this.filter = new BehaviorSubject_1.BehaviorSubject(null);
                    this.expense = new BehaviorSubject_1.BehaviorSubject(null);
                }
                ExpenseService.prototype.getAll = function (criteria) {
                    var _this = this;
                    var query = '';
                    if (criteria) {
                        query = "?" + index_2.serializeQuery(criteria);
                    }
                    this._authHttp
                        .get("/api/expenses" + query, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        return data.map(function (expense) {
                            return new expense_model_1.Expense(expense._id, expense.name, expense.currency, expense.amoun, expense.scaleFactor, expense.value, expense.user, expense.category, expense.createdAt);
                        });
                    }).subscribe(function (expenses) {
                        _this._expensesObserver.next(expenses);
                    }, function (err) { return console.error(err); });
                };
                ExpenseService.prototype.findById = function (id) {
                    return this._authHttp
                        .get("/api/expenses/" + id, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (expense) {
                        return new expense_model_1.Expense(expense._id, expense.name, expense.currency, expense.amoun, expense.scaleFactor, expense.value, expense.user, expense.category, expense.createdAt);
                    });
                };
                ExpenseService.prototype.create = function (expense) {
                    var body = JSON.stringify(expense);
                    return this._authHttp
                        .post('/api/expenses', body, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (expense) {
                        return new expense_model_1.Expense(expense._id, expense.name, expense.currency, expense.amoun, expense.scaleFactor, expense.value, expense.user, expense.category, expense.createdAt);
                    });
                };
                ExpenseService.prototype.update = function (expense) {
                    var body = JSON.stringify(expense);
                    return this._authHttp
                        .put("/api/expenses/" + expense._id, body, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (expense) {
                        return new expense_model_1.Expense(expense._id, expense.name, expense.currency, expense.amoun, expense.scaleFactor, expense.value, expense.user, expense.category, expense.createdAt);
                    });
                };
                ExpenseService.prototype.delete = function (expense) {
                    return this._authHttp
                        .put("/api/expenses/" + expense._id, '', { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                ExpenseService.prototype.getExpensesBalance = function (criteria) {
                    var query = '';
                    if (criteria) {
                        query = "?" + index_2.serializeQuery(criteria);
                    }
                    return this._authHttp
                        .get("/api/expenses/balance" + query, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                ExpenseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [index_1.AuthHttp])
                ], ExpenseService);
                return ExpenseService;
            }());
            exports_1("ExpenseService", ExpenseService);
        }
    }
});
//# sourceMappingURL=expense.service.js.map