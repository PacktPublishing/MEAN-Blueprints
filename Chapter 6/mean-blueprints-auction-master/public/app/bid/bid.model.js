System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bid;
    return {
        setters:[],
        execute: function() {
            Bid = (function () {
                function Bid(_id, bidder, amount, createdAt) {
                    this._id = _id;
                    this.bidder = bidder;
                    this.amount = amount;
                    this.createdAt = createdAt;
                }
                return Bid;
            }());
            exports_1("Bid", Bid);
        }
    }
});
//# sourceMappingURL=bid.model.js.map