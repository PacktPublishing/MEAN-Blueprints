System.register(['angular2/core', '../common/index', '../auction/index'], function(exports_1, context_1) {
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
    var core_1, index_1, index_2;
    var BidService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            BidService = (function () {
                function BidService(socketService, auctionService) {
                    var _this = this;
                    this._socketService = socketService;
                    this._auctionService = auctionService;
                    this.currentAuction = {};
                    this._auctionService.currentAuction.subscribe(function (auction) {
                        _this.currentAuction = auction;
                    });
                    // this.bid = new BehaviorSubject<Bid>(new Bid());
                    // this._socketService.bid.filter((data) => {
                    //   return data.auctionId === this.currentAuction._id;
                    // }).subscribe(this.bid);
                    this.bid = this._socketService.bid.filter(function (data) {
                        return data.auctionId === _this.currentAuction._id;
                    });
                }
                BidService.prototype.placeBid = function (auctionId, bid) {
                    this._socketService.emit('place:bid', {
                        auctionId: auctionId,
                        amount: bid.amount
                    });
                };
                BidService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [index_1.SocketService, index_2.AuctionService])
                ], BidService);
                return BidService;
            }());
            exports_1("BidService", BidService);
        }
    }
});
//# sourceMappingURL=bid.service.js.map