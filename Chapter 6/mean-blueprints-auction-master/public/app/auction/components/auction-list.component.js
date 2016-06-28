System.register(['angular2/core', '../auction.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, auction_service_1, router_1;
    var AuctionListComponent;
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
            }],
        execute: function() {
            AuctionListComponent = (function () {
                function AuctionListComponent(auctionService) {
                    this.auctions = [];
                    this._auctionService = auctionService;
                }
                AuctionListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._auctionService.auctions.subscribe(function (auctions) {
                        console.log(auctions);
                        _this.auctions = auctions;
                    });
                    this._auctionService.getAll();
                };
                AuctionListComponent = __decorate([
                    core_1.Component({
                        selector: 'auction-list',
                        directives: [router_1.RouterLink],
                        template: "\n      <div class=\"auction-list row\">\n        <h2 class=\"col\">Available auctions</h2>\n        <div *ngFor=\"#auction of auctions\" class=\"col col-25\">\n          <h3>\n            <a href=\"#\"\n              [routerLink]=\"['AuctionDetail', { identifier: auction.identifier }]\">\n              {{ auction.item.title }}\n            </a>\n          </h3>\n          <p>starting price: {{ auction.startingPrice.display }} {{ auction.startingPrice.currency }}</p>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [auction_service_1.AuctionService])
                ], AuctionListComponent);
                return AuctionListComponent;
            }());
            exports_1("AuctionListComponent", AuctionListComponent);
        }
    }
});
//# sourceMappingURL=auction-list.component.js.map