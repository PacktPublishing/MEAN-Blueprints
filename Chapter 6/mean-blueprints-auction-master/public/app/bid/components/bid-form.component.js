System.register(['angular2/core', '../bid.service', '../bid.model'], function(exports_1, context_1) {
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
    var core_1, bid_service_1, bid_model_1;
    var MessageFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bid_service_1_1) {
                bid_service_1 = bid_service_1_1;
            },
            function (bid_model_1_1) {
                bid_model_1 = bid_model_1_1;
            }],
        execute: function() {
            MessageFormComponent = (function () {
                function MessageFormComponent(bidService) {
                    this._bidService = bidService;
                }
                MessageFormComponent.prototype.ngOnInit = function () {
                    // this._threadService.currentThread.subscribe(thread => this._thread = thread);
                    this.newBid = new bid_model_1.Bid();
                };
                MessageFormComponent.prototype.onEnter = function (event) {
                    event.preventDefault();
                    this.sendMessage();
                };
                MessageFormComponent.prototype.sendMessage = function () {
                    var bid = Object.assign({}, this.newBid);
                    // message.thread = this._thread._id;
                    this._bidService.placeBid('<auction_id_here>', bid);
                    // this.newBid = new Bid();
                };
                MessageFormComponent = __decorate([
                    core_1.Component({
                        selector: 'bid-form',
                        template: "\n      <input\n        class=\"message-form form-control\"\n        autocorrect=\"off\" autocomplete=\"off\" spellcheck=\"true\"\n        (keydown.enter)=\"onEnter($event)\"\n        [(ngModel)]=\"newBid.amount\"\n      >\n    "
                    }), 
                    __metadata('design:paramtypes', [bid_service_1.BidService])
                ], MessageFormComponent);
                return MessageFormComponent;
            }());
            exports_1("MessageFormComponent", MessageFormComponent);
        }
    }
});
//# sourceMappingURL=bid-form.component.js.map