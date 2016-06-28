System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Auction;
    return {
        setters:[],
        execute: function() {
            Auction = (function () {
                function Auction(_id, item, startingPrice, currentPrice, endPrice, minAmount, bids, status, startsAt, endsAt, createdAt) {
                    this._id = _id;
                    this.item = item;
                    this.startingPrice = startingPrice;
                    this.currentPrice = currentPrice;
                    this.endPrice = endPrice;
                    this.minAmount = minAmount;
                    this.bids = bids;
                    this.status = status;
                    this.startsAt = startsAt;
                    this.endsAt = endsAt;
                    this.createdAt = createdAt;
                }
                return Auction;
            }());
            exports_1("Auction", Auction);
        }
    }
});
//# sourceMappingURL=auction.js.map