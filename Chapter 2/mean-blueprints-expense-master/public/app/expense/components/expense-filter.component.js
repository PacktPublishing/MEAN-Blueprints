System.register(['angular2/core', '../../category/index', '../expense.service'], function(exports_1, context_1) {
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
    var core_1, index_1, expense_service_1;
    var ExpenseFilterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (expense_service_1_1) {
                expense_service_1 = expense_service_1_1;
            }],
        execute: function() {
            ExpenseFilterComponent = (function () {
                function ExpenseFilterComponent(expenseService, categoryService) {
                    this._expenseService = expenseService;
                    this._categoryService = categoryService;
                }
                ExpenseFilterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.filter = {};
                    this.categories = [];
                    this._subscriptions = [];
                    this._subscriptions.push(this._categoryService
                        .categories
                        .subscribe(function (categories) {
                        _this.categories = categories;
                    }));
                };
                ExpenseFilterComponent.prototype.ngOnDestroy = function () {
                    this._subscriptions.forEach(function (subscription) {
                        subscription.unsubscribe();
                    });
                };
                ExpenseFilterComponent.prototype.onFilter = function (event) {
                    event.preventDefault();
                    this._expenseService.filter.next(this.filter);
                };
                ExpenseFilterComponent.prototype.onReset = function (event) {
                    event.preventDefault();
                    this.filter = {};
                    this._expenseService.filter.next(this.filter);
                };
                ExpenseFilterComponent = __decorate([
                    core_1.Component({
                        selector: 'expense-filter',
                        template: "\n      <div>\n        <form role=\"form\">\n          <div class=\"form-group\">\n            <label for=\"startDate\">Start</label>\n            <input type=\"date\" [(ngModel)]=\"filter.startDate\" class=\"form-control\" id=\"startDate\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"endDate\">End</label>\n            <input type=\"date\" [(ngModel)]=\"filter.endDate\" class=\"form-control\" id=\"endDate\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"category\">Category</label>\n            <select name=\"category\" [(ngModel)]=\"filter.category\">\n              <option *ngFor=\"#category of categories\" [value]=\"category._id\">\n                {{ category.name }}\n              </option>\n            </select>\n          </div>\n          <button type=\"submit\" class=\"button\" (click)=\"onFilter($event)\">Filter</button>\n          <button type=\"button\" class=\"button\" (click)=\"onReset($event)\">Reset</button>\n        </form>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [expense_service_1.ExpenseService, index_1.CategoryService])
                ], ExpenseFilterComponent);
                return ExpenseFilterComponent;
            }());
            exports_1("ExpenseFilterComponent", ExpenseFilterComponent);
        }
    }
});
//# sourceMappingURL=expense-filter.component.js.map