System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Subject/BehaviorSubject', '../common/headers', '../datatypes/auction'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, BehaviorSubject_1, headers_1, auction_1;
    var URL, AuctionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (auction_1_1) {
                auction_1 = auction_1_1;
            }],
        execute: function() {
            URL = 'http://localhost:3000/api/auctions';
            AuctionService = (function () {
                function AuctionService(http) {
                    var _this = this;
                    this.currentAuction = new BehaviorSubject_1.BehaviorSubject(new auction_1.Auction());
                    this._http = http;
                    this.auction = new Observable_1.Observable(function (observer) { return _this._auctionObservers = observer; }).share();
                    this.auctions = new Observable_1.Observable(function (observer) { return _this._auctionsObservers = observer; }).share();
                    this._dataStore = { auctions: [], auction: new auction_1.Auction() };
                }
                AuctionService.prototype.getAllAuctions = function () {
                    var _this = this;
                    this._http
                        .get(URL, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (auctions) {
                        _this._dataStore.auctions = auctions;
                        _this._auctionsObservers.next(_this._dataStore.auctions);
                    });
                };
                AuctionService.prototype.getOne = function (id) {
                    var _this = this;
                    this._http
                        .get(URL + "/" + id)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (auction) {
                        _this._dataStore.auction = auction;
                        _this._auctionObservers.next(_this._dataStore.auction);
                    });
                };
                AuctionService.prototype.setCurrentAuction = function (auction) {
                    this.currentAuction.next(auction);
                };
                AuctionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuctionService);
                return AuctionService;
            }());
            exports_1("AuctionService", AuctionService);
        }
    }
});
//# sourceMappingURL=auction.service.js.map