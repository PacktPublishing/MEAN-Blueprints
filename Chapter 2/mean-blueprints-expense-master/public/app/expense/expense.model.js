System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Expense;
    return {
        setters:[],
        execute: function() {
            Expense = (function () {
                function Expense(_id, name, currency, amount, scaleFactor, value, user, category, createdAt) {
                    this._id = _id;
                    this.name = name;
                    this.currency = currency;
                    this.amount = amount;
                    this.scaleFactor = scaleFactor;
                    this.value = value;
                    this.user = user;
                    this.category = category;
                    this.createdAt = new Date(createdAt);
                }
                return Expense;
            }());
            exports_1("Expense", Expense);
        }
    }
});
//# sourceMappingURL=expense.model.js.map