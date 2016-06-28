System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bidder;
    return {
        setters:[],
        execute: function() {
            Bidder = (function () {
                function Bidder(_id, profileId, additionalData, auctions, createdAt) {
                    this._id = _id;
                    this.profileId = profileId;
                    this.additionalData = additionalData;
                    this.auctions = auctions;
                    this.createdAt = createdAt;
                }
                return Bidder;
            }());
            exports_1("Bidder", Bidder);
        }
    }
});
//# sourceMappingURL=bidder.js.map