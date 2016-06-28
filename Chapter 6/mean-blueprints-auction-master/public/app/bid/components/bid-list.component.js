System.register(['angular2/core', '../bid.service', './bid.component'], function(exports_1, context_1) {
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
    var core_1, bid_service_1, bid_component_1;
    var BidListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bid_service_1_1) {
                bid_service_1 = bid_service_1_1;
            },
            function (bid_component_1_1) {
                bid_component_1 = bid_component_1_1;
            }],
        execute: function() {
            BidListComponent = (function () {
                function BidListComponent(bidService) {
                    this._bidService = bidService;
                }
                BidListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._subscription = this._bidService.bid.subscribe(function (bid) {
                        _this.bids.push(bid);
                    });
                };
                BidListComponent.prototype.ngOnDestroy = function () {
                    if (this._subscription) {
                        this._subscription.unsubscribe();
                    }
                };
                BidListComponent = __decorate([
                    core_1.Component({
                        selector: 'bid-list',
                        inputs: ['bids'],
                        directives: [bid_component_1.BidComponent],
                        template: "\n      <div class=\"bid-list\">\n        <div *ngIf=\"bids.length === 0\" class=\"empty-bid-list\">\n          <h3>No bids so far :)</h3>\n        </div>\n        <bid *ngFor=\"#bid of bids\" [bid]=\"bid\"></bid>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [bid_service_1.BidService])
                ], BidListComponent);
                return BidListComponent;
            }());
            exports_1("BidListComponent", BidListComponent);
        }
    }
});
//# sourceMappingURL=bid-list.component.js.map