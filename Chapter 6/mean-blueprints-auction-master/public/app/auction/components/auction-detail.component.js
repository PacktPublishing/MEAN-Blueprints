System.register(['angular2/core', '../auction.service', 'angular2/router', '../auction.model', '../../bid/index'], function(exports_1, context_1) {
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
    var core_1, auction_service_1, router_1, auction_model_1, index_1;
    var AuctionDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auction_service_1_1) {
                auction_service_1 = auction_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auction_model_1_1) {
                auction_model_1 = auction_model_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            // import { BidFormComponent } from '../../bid/index';
            AuctionDetailComponent = (function () {
                function AuctionDetailComponent(auctionService, routeParams) {
                    this._auctionService = auctionService;
                    this._routeParams = routeParams;
                }
                AuctionDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var identifier = this._routeParams.get('identifier');
                    var auctionId = this.getAuctionId(identifier);
                    this.auction = new auction_model_1.Auction();
                    this._auctionService.auction.subscribe(function (auction) {
                        _this.auction = auction;
                        _this._auctionService.setCurrentAuction(auction);
                    });
                    this._auctionService.getOne(auctionId);
                };
                AuctionDetailComponent.prototype.ngOnDestroy = function () {
                    this._auctionService.setCurrentAuction(new auction_model_1.Auction());
                };
                AuctionDetailComponent.prototype.getAuctionId = function (identifier) {
                    var chunks = identifier.split('-');
                    return chunks[chunks.length - 1];
                };
                AuctionDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'auction-detail',
                        directives: [
                            index_1.BidListComponent,
                            router_1.RouterLink
                        ],
                        template: "\n      <div class=\"col\">\n        <a href=\"#\" [routerLink]=\"['AuctionList']\">back to auctions</a>\n      </div>\n      <div class=\"row\">\n        <div class=\"col sidebar\">\n          <div class=\"auction-details\">\n            <h2>{{ auction.item.title }}</h2>\n            <p>{{ auction.startingPrice.display }} {{ auction.startingPrice.currency }}</p>\n            <p>{{ auction.currentPrice.dislpay }} {{ auction.startingPrice.currency }}</p>\n            <p>minimal bid amount: {{ auction.minAmount.display }}</p>\n          </div>\n        </div>\n        <div class=\"col content\">\n          <bid-list [bids]=\"auction.bids\" [auctionId]=\"auction._id\"></bid-list>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [auction_service_1.AuctionService, router_1.RouteParams])
                ], AuctionDetailComponent);
                return AuctionDetailComponent;
            }());
            exports_1("AuctionDetailComponent", AuctionDetailComponent);
        }
    }
});
//# sourceMappingURL=auction-detail.component.js.map