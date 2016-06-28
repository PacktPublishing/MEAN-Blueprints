System.register(['angular2/core', '../services/bid.service', './bid.component'], function(exports_1, context_1) {
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
                    var _this = this;
                    this.bids = [];
                    this._bidService = bidService;
                    this._bidService.bids.subscribe(function (bids) { return _this.bids = bids; });
                }
                BidListComponent = __decorate([
                    core_1.Component({
                        selector: 'bid-list',
                        directives: [bid_component_1.BidComponent],
                        template: "\n      <div class=\"bid-list\">\n        <div *ngIf=\"messages.length === 0\" class=\"empty-bid-list\">\n          <h3>No bids so far :)</h3>\n        </div>\n        <bid\n          *ngFor=\"#bid of bids\"\n          [bid]=\"bid\"\n          ></bid>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof bid_service_1.BidService !== 'undefined' && bid_service_1.BidService) === 'function' && _a) || Object])
                ], BidListComponent);
                return BidListComponent;
                var _a;
            }());
            exports_1("BidListComponent", BidListComponent);
        }
    }
});
//# sourceMappingURL=bid-list.component.js.map