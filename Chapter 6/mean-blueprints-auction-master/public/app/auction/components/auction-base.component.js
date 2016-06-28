System.register(['angular2/core', 'angular2/router', './auction-list.component', './auction-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, auction_list_component_1, auction_detail_component_1;
    var AuctionBaseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auction_list_component_1_1) {
                auction_list_component_1 = auction_list_component_1_1;
            },
            function (auction_detail_component_1_1) {
                auction_detail_component_1 = auction_detail_component_1_1;
            }],
        execute: function() {
            AuctionBaseComponent = (function () {
                function AuctionBaseComponent() {
                }
                AuctionBaseComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', as: 'AuctionList', component: auction_list_component_1.AuctionListComponent, useAsDefault: true },
                        { path: '/:identifier', as: 'AuctionDetail', component: auction_detail_component_1.AuctionDetailComponent }
                    ]),
                    core_1.Component({
                        selector: 'auction-base',
                        directives: [
                            auction_list_component_1.AuctionListComponent,
                            auction_detail_component_1.AuctionDetailComponent,
                            router_1.RouterOutlet
                        ],
                        template: "\n      <div class=\"col\">\n        <router-outlet></router-outlet>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuctionBaseComponent);
                return AuctionBaseComponent;
            }());
            exports_1("AuctionBaseComponent", AuctionBaseComponent);
        }
    }
});
//# sourceMappingURL=auction-base.component.js.map