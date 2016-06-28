System.register(['../common/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1;
    var Auction;
    return {
        setters:[
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            Auction = (function () {
                function Auction(_id, item, startingPrice, currentPrice, endPrice, minAmount, bids, status, startsAt, endsAt, createdAt, identifier) {
                    this._id = _id;
                    this.item = item || { slug: '' };
                    this.startingPrice = startingPrice || new index_1.Money();
                    this.currentPrice = currentPrice || this.startingPrice;
                    this.endPrice = endPrice || new index_1.Money();
                    this.minAmount = minAmount || new index_1.Money();
                    this.bids = bids || [];
                    this.status = status;
                    this.startsAt = startsAt;
                    this.endsAt = endsAt;
                    this.createdAt = createdAt;
                    this.identifier = identifier || this.item.slug + "-" + this._id;
                }
                return Auction;
            }());
            exports_1("Auction", Auction);
        }
    }
});
//# sourceMappingURL=auction.model.js.map