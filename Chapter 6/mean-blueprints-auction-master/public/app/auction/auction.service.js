System.register(['angular2/core', 'rxjs/Observable', 'rxjs/Subject/BehaviorSubject', '../auth/index', '../common/headers', './auction.model'], function(exports_1, context_1) {
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
    var core_1, Observable_1, BehaviorSubject_1, index_1, headers_1, auction_model_1;
    var URL, AuctionService;
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
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (auction_model_1_1) {
                auction_model_1 = auction_model_1_1;
            }],
        execute: function() {
            URL = 'api/auctions';
            AuctionService = (function () {
                function AuctionService(authHttp) {
                    var _this = this;
                    this.currentAuction = new BehaviorSubject_1.BehaviorSubject(new auction_model_1.Auction());
                    this._authHttp = authHttp;
                    this.auction = new Observable_1.Observable(function (observer) { return _this._auctionObservers = observer; }).share();
                    this.auctions = new Observable_1.Observable(function (observer) { return _this._auctionsObservers = observer; }).share();
                    this._dataStore = { auctions: [], auction: new auction_model_1.Auction() };
                }
                AuctionService.prototype.getAll = function () {
                    var _this = this;
                    this._authHttp
                        .get(URL, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        return data.map(function (auction) {
                            return new auction_model_1.Auction(auction._id, auction.item, auction.startingPrice, auction.currentPrice, auction.endPrice, auction.minAmount, auction.bids, auction.status, auction.startsAt, auction.endsAt, auction.createdAt);
                        });
                    })
                        .subscribe(function (auctions) {
                        _this._dataStore.auctions = auctions;
                        _this._auctionsObservers.next(_this._dataStore.auctions);
                    }, function (err) { return console.error(err); });
                };
                AuctionService.prototype.getOne = function (id) {
                    var _this = this;
                    this._authHttp
                        .get(URL + "/" + id)
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        return new auction_model_1.Auction(data._id, data.item, data.startingPrice, data.currentPrice, data.endPrice, data.minAmount, data.bids, data.status, data.startsAt, data.endsAt, data.createdAt);
                    })
                        .subscribe(function (auction) {
                        _this._dataStore.auction = auction;
                        _this._auctionObservers.next(_this._dataStore.auction);
                    }, function (err) { return console.error(err); });
                };
                AuctionService.prototype.setCurrentAuction = function (auction) {
                    this.currentAuction.next(auction);
                };
                AuctionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [index_1.AuthHttp])
                ], AuctionService);
                return AuctionService;
            }());
            exports_1("AuctionService", AuctionService);
        }
    }
});
//# sourceMappingURL=auction.service.js.map