System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Money;
    return {
        setters:[],
        execute: function() {
            Money = (function () {
                function Money(amount, currency, display, factor) {
                    this.amount = amount;
                    this.currency = currency;
                    this.display = display;
                    this.factor = factor;
                }
                return Money;
            }());
            exports_1("Money", Money);
        }
    }
});
//# sourceMappingURL=money.model.js.map